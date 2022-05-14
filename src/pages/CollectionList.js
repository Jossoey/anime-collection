import { useContext } from "react";
import CollectionContext from "../context/CollectionContext";
import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Main = styled.div`
  background-color: #2d2d2d;
  padding: 30px;
  font-size: 24px;
  color: white;
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

  let content;

  const clickHandle = (e) => {
    collections.context.addCollection(value, e);
  };

  if (collections.context.totalCollection === 0) {
    content = [];
  } else {
    content = collections.context.animeCollection.collection;
  }

  return (
    <Main>
      <CenterH2>List of Collection</CenterH2>
      {content.map((collection) => {
          return (
            <StyleLink
              key={collection.name}
              to={`/collection/${collection.name}`}
            >
              <H3>{collection.name}</H3>
              <Image src={collection.img} alt={collection.name} />
            </StyleLink>
          );
      })}
      <Form>
        <Input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button onClick={clickHandle}>Add new collection</Button>
      </Form>
    </Main>
  );
}

export default CollectionListPage;
