import styled from "@emotion/styled";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CollectionContext from "../../context/CollectionContext";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(118, 118, 118, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
`;

const Container = styled.div`
  width: 300px;
  height: auto;
  background-color: #2d2d2d;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Close = styled.button`
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
`;

const ButtonGroup = styled.div`
  display: inline-block;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
`;

const CollectionButton = styled.button`
  font-size: 4vw;
  text-decoration: none;
  color: white;
  background-color: #212121;
  border: none;
  padding: 10px;
  width: 85%;
  margin-bottom: 15px;
  align-self: flex-end;
  &:hover {
    background-color: white;
    color: black;
  }
`;

function AddToCollectionModal({ closeModal, anime }) {
  const collections = useContext(CollectionContext);

  const addToHandle = (collectionName) => {
    collections.context.addToCollection(collectionName, anime);
    closeModal(false);
  };

  let content;

  if (collections.context.totalCollection === 0) {
    content = [];
  } else {
    content = collections.context.animeCollection.collection;
  }

  return (
    <Background>
      <Container>
        <CloseBtn>
          <Close
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </Close>
        </CloseBtn>
        <ButtonGroup>
          {content.map((collection) => {
            return (
            <CollectionButton key={collection.name} onClick={() => {addToHandle(collection.name)}}>
              {collection.name}
            </CollectionButton>);
          })}
        </ButtonGroup>
      </Container>
    </Background>
  );
}

export default AddToCollectionModal;
