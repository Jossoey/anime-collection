import { useContext, useState } from "react";
import CollectionContext from "../context/CollectionContext";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import RemoveCollectionModal from "../components/ui/RemoveCollectionModal";

const Main = styled.div`
  background-color: #2d2d2d;
  padding: 30px;
  font-size: 24px;
  color: white;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CenterH2 = styled.h2`
  text-align: center;
  margin-top: 1rem;
  font-size: 6vw;
`;

const H3 = styled.h2`
  margin: 1rem 0;
  font-size: 5.5vw;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
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

const RButton = styled(Button)`
  width: auto;
  padding: 7px 10px;
  margin: 0px 0px 0px 7px;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 100%;
`;

function CollectionListPage() {
  const collections = useContext(CollectionContext);
  const [value, setValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentCollectionName, setCurrentCollectionName] = useState("");

  let content;

  const clickHandle = (e) => {
    e.preventDefault();
    collections.context.addCollection(value);
    setValue("");
    document.getElementById('input').value = "";
  };

  if (collections.context.totalCollection === 0) {
    content = [];
  } else {
    content = collections.context.animeCollection.collection;
  }

  return (
    <Main>
      <CenterH2>List of Collection</CenterH2>
      <Form>
        <Input
          type="text"
          id="input"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button onClick={clickHandle}>Add new collection</Button>
      </Form>
      {content.map((collection) => {
        return (
          <div key={collection.name}>
            <Title>
              <StyleLink to={`/collection/${collection.name}`}>
                <H3>{collection.name}</H3>
              </StyleLink>
              <div>
                <RButton>Rename</RButton>
                <RButton
                  onClick={() => {
                    setOpenModal(true);
                    setCurrentCollectionName(collection.name);
                  }}
                >
                  Remove
                </RButton>
              </div>
            </Title>
            <StyleLink to={`/collection/${collection.name}`}>
              <Image src={collection.img} alt={collection.name} />
            </StyleLink>
          </div>
        );
      })}
      {openModal && (
        <RemoveCollectionModal
          closeModal={setOpenModal}
          collectionName={currentCollectionName}
        />
      )}
    </Main>
  );
}

export default CollectionListPage;
