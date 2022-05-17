import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import { useParams , Link } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "@emotion/styled";

import CollectionContext from "../context/CollectionContext";

import { GET_ONE_ANIME } from "../gql/Query";
import AddToCollectionModal from "../components/ui/AddToCollectionModal";
import AddCollectionModal from "../components/ui/AddCollectionModal";

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-style: italic;
  margin: 0 5px;
  border-bottom: 2px solid #ffffff;
  &:hover {
    text-decoration: underline;
  }
`;

function AnimeDetailPage() {
  const { id } = useParams();
  const [openCollectionModal, setOpenCollectionModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const collections = useContext(CollectionContext);
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

  const allCollection = collections.context.animeCollection.collection;

  let belongsTo = [];
  for (let i = 0; i < allCollection.length; i++) {
    for (let j = 0; j < allCollection[i].anime.length; j++) {
      if (allCollection[i].anime[j].id === data.Media.id) {
        belongsTo.push(allCollection[i]);
      }
    }
  }

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
            {belongsTo.map((collection) => {
              return (
                <StyledLink
                  to={`/collection/${collection.name}`}
                  key={collection.name}
                >
                  {collection.name}
                </StyledLink>
              );
            })}
          </p>
        </Details>
      </div>
      <Button onClick={() => {allCollection.length ? setOpenCollectionModal(true) : setOpenAddModal(true)}}>Add to collection</Button>
      {openCollectionModal && (
        <AddToCollectionModal closeModal={setOpenCollectionModal} anime={data.Media} />
      )}
      {openAddModal && <AddCollectionModal closeModal={setOpenAddModal} />}
    </CenterDiv>
  );
}

export default AnimeDetailPage;
