import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import Card from "../components/ui/Card";
import RemoveFromCollectionModal from "../components/ui/RemoveFromCollectionModal";

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 0px;
  &:hover {
    text-decoration: underline;
  }
`;

const Main = styled.div`
  background-color: #2d2d2d;
  padding-top: 15px;
  color: white;
`;

const Container = styled.div`
  padding-bottom: 20px;
`;

const P = styled.p`
  margin: 10px 8px 10px 0;
  font-size: 20px;
`;

const CenterP = styled(P)`
  text-align: center;
`;

const CenterH2 = styled.h2`
  text-align: center;
  margin-top: 1rem;
  font-size: 6vw;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Image = styled.img`
  width: 100%;
`;

const Button = styled.button`
  font-size: 4vw;
  text-decoration: none;
  color: white;
  background-color: #212121;
  border: none;
  padding: 7px;
  width: 100px;
  margin-top: 10px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

function CollectionDetailPage() {
  const { name } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const localData = JSON.parse(localStorage.getItem("animeCollection"));
  const [currentAnime, setCurrentAnime] = useState(0);

  const collection = localData.collection.filter((item) => {
    return item.name === name;
  })[0];

  if (collection.anime.length === 0) {
    return (
      <Main>
        <CenterH2>Collection : {collection.name}</CenterH2>
        <CenterP>This collection is empty</CenterP>
      </Main>
    );
  }

  return (
    <Main>
      <CenterH2>Collection : {collection.name}</CenterH2>
      {collection.anime.map((anime) => {
        return (
          <Container key={anime.id}>
            <Card>
              <TitleLink to={`/anime/${anime.id}`}>
                <Image src={anime.coverImage.large} alt={anime.title.english} />
              </TitleLink>

              <Footer>
                <TitleLink to={`/anime/${anime.id}`}>
                  <P>{anime.title.english}</P>
                </TitleLink>
                <Button
                  onClick={() => {
                    setOpenModal(true);
                    setCurrentAnime(anime);
                  }}
                >
                  Remove
                </Button>
              </Footer>
            </Card>
          </Container>
        );
      })}
      {openModal && (
        <RemoveFromCollectionModal
          closeModal={setOpenModal}
          collectionName={collection.name}
          anime={currentAnime}
        />
      )}
    </Main>
  );
}

export default CollectionDetailPage;
