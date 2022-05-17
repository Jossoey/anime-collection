import styled from "@emotion/styled";
import { useContext, useState } from "react";
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 4.5vw;
  padding: 5px 7px;
  display: inline-block;
`;

const Button = styled.button`
  font-size: 4vw;
  text-decoration: none;
  color: white;
  background-color: #212121;
  border: none;
  padding: 7px;
  width: 70%;
  align-self: flex-end;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const H3 = styled.h2`
  font-size: 5.5vw;
  overflow-wrap: break-word;
`;

function RenameCollectionModal({ closeModal, collectionName }) {
  const collections = useContext(CollectionContext);
  const [value, setValue] = useState("");

  const clickHandle = (e) => {
    e.preventDefault();
    collections.context.changeCollectionName(collectionName, value);
    setValue("");
    document.getElementById("input").value = "";
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
          <Form>
            <H3>Enter collection name for "{collectionName}"</H3>
            <Input
              type="text"
              id="input"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <Button onClick={clickHandle}>Rename Collection</Button>
          </Form>
        </Text>
      </Container>
    </Background>
  );
}

export default RenameCollectionModal;
