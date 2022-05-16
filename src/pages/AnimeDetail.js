import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";

import { GET_ONE_ANIME } from "../gql/Query";
import AddToCollectionModal from "../components/ui/AddToCollectionModal";

const ItalicP = styled.p`
  font-style: italic;
  color: #a0adb2;
`;

const CenterDiv = styled.div`
  margin: 2rem;
  color: #ffffff;
`;

const ImageSizeUp = styled.img`
  width: 100%;
`;

const ItalicSpan = styled.span`
  font-style: italic;
  color: #a0adb2;
`;

const DetailSpan = styled.span`
  font-weight: 700;
  color: #a0adb2;
`;

const Details = styled.div`
  padding: 1rem 0;
`;

const Button = styled.button`
  font-size: 4vw;
  text-decoration: none;
  color: white;
  background-color: #212121;
  border: none;
  padding: 7px;
  width: 70%;
  margin-bottom: 2rem;
  align-self: flex-end;
  &:hover {
    background-color: white;
    color: black;
  }
`;

function AnimeDetailPage() {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const { loading, error, data } = useQuery(GET_ONE_ANIME, {
    variables: { id: id },
  });

  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p>
        {isReadMore ? text.slice(0, 200) : text}
        <ItalicSpan onClick={toggleReadMore}>
          {isReadMore ? "[ more ]" : "[ less ]"}
        </ItalicSpan>
      </p>
    );
  };

  // console.log(data);
  return (
    <CenterDiv>
      <ImageSizeUp
        src={data.Media.coverImage.large}
        alt={data.Media.title.english}
      ></ImageSizeUp>
      <div>
        <h2>{data.Media.title.english}</h2>
        <ItalicP>
          Other names: {data.Media.title.native} {" , "}
          {data.Media.title.userPreferred}
        </ItalicP>
        <ReadMore>{data.Media.description}</ReadMore>
        <Details>
          <p>
            <DetailSpan>Status : </DetailSpan>
            {data.Media.status}
          </p>
          <p>
            <DetailSpan>Genre : </DetailSpan>
            {data.Media.genres.join(", ")}
          </p>
          <p>
            <DetailSpan>Episodes : </DetailSpan>
            {data.Media.episodes}
          </p>
          <p>
            <DetailSpan>Duration : </DetailSpan>
            {data.Media.duration} min/ep
          </p>
          <p>
            <DetailSpan>Rating : </DetailSpan>
            {data.Media.averageScore / 10}
          </p>
          <p>
            <DetailSpan>Collections : </DetailSpan>
            ...
          </p>
        </Details>
      </div>
      <Button onClick={() => setOpenModal(true)}>Add to collection</Button>
      {openModal && (
        <AddToCollectionModal
          closeModal={setOpenModal}
          anime={data.Media}
        />
      )}
    </CenterDiv>
  );
}

export default AnimeDetailPage;
