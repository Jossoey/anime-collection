import styled from "@emotion/styled";
import { useContext } from "react";
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

const Text = styled.div`
  display: inline-block;
  padding: 10px;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 5vw;
  overflow-wrap: break-word;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 20px 0;
  gap: 15px;
`;

const Button = styled.div`
  font-size: 20px;
  color: white;
  background-color: ${(props) => props.color};
  border: none;
  text-decoration: none;
  padding: 10px 15px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

function RemoveCollectionModal({ closeModal, collectionName }) {
  const collections = useContext(CollectionContext);

  const removeHandle = () => {
    collections.context.removeCollection(collectionName);
    closeModal(false);
  };

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
        <Text>
          <H4>Remove collection "{collectionName}" ?</H4>
        </Text>
        <Footer>
          <Button
            color="#9b0000"
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </Button>
          <Button color="#212121" onClick={removeHandle}>
            Continue
          </Button>
        </Footer>
      </Container>
    </Background>
  );
}

export default RemoveCollectionModal;
