import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Card from "../components/ui/Card";
import { GET_ANIME } from "../gql/Query";
import styled from "@emotion/styled";

const Main = styled.div`
  background-color: #2d2d2d;
  padding: 30px;
  font-size: 24px;
  color: white;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const CenterP = styled.p`
  text-align: center;
  margin: 1rem 0px;
  font-size: 20px;
`;

const CenterH2 = styled.h2`
  text-align: center;
  margin-top: 1rem;
  font-size: 6vw;
`;

const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Button = styled.button`
  font-size: 16px;
  color: white;
  background-color: #212121;
  font-weight: bold;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: black;
  }
  &: disabled {
    background-color: black;
    &:hover {
      color: white;
    }
  }
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

function AnimeListPage() {
  const perPage = 10;

  const [page, setPage] = useState(0);
  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { perPage: perPage, page: page + 1 },
  });

  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;

  return (
    <Main>
      <CenterH2>List of Anime</CenterH2>
      <FlexDiv>
        {data.Page.media.map((anime) => {
          return (
            <TitleLink key={anime.id} to={`/anime/${anime.id}`}>
              <Card>
                <Image src={anime.coverImage.large} alt={anime.title.english} />
                <CenterP>{anime.title.english}</CenterP>
              </Card>
            </TitleLink>
          );
        })}
      </FlexDiv>
      <ButtonDiv>
        <Button disabled={!page} onClick={() => setPage((prev) => prev - 1)}>
          &lt; Previous
        </Button>
        <CenterP >Page {page + 1}</CenterP>
        <Button onClick={() => setPage((prev) => prev + 1)}>Next &gt;</Button>
      </ButtonDiv>
    </Main>
  );
}

export default AnimeListPage;
