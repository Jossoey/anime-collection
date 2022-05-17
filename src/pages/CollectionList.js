import { useContext, useState } from "react";
import CollectionContext from "../context/CollectionContext";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import RemoveCollectionModal from "../components/ui/RemoveCollectionModal";
import AddCollectionModal from "../components/ui/AddCollectionModal";
import RenameCollectionModal from "../components/ui/RenameCollectionModal";

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

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const CenterH2 = styled.h2`
  text-align: center;
  margin-top: 1rem;
  font-size: 6vw;
`;

const H3 = styled.h2`
  margin: 1rem 0;
  font-size: 5.5vw;
  max-width: 250px;
  overflow-wrap: break-word;
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
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openRenameModal, setOpenRenameModal] = useState(false);
  const [currentCollectionName, setCurrentCollectionName] = useState("");

  let content;

  if (collections.context.totalCollection === 0) {
    content = [];
  } else {
    content = collections.context.animeCollection.collection;
  }

  return (
    <Main>
      <CenterH2>List of Collection</CenterH2>
      <CenterDiv>
        <Button onClick={() => setOpenAddModal(true)}>
          Add new collection
        </Button>
      </CenterDiv>
      {content.map((collection) => {
        return (
          <div key={collection.name}>
            <Title>
              <StyleLink to={`/collection/${collection.name}`}>
                <H3>{collection.name}</H3>
              </StyleLink>
              <div>
                <RButton
                  onClick={() => {
                    setOpenRenameModal(true);
                    setCurrentCollectionName(collection.name);
                  }}
                >
                  Rename
                </RButton>
                <RButton
                  onClick={() => {
                    setOpenRemoveModal(true);
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
      {openRemoveModal && (
        <RemoveCollectionModal
          closeModal={setOpenRemoveModal}
          collectionName={currentCollectionName}
        />
      )}
      {openAddModal && (
        <AddCollectionModal
          closeModal={setOpenAddModal}
          collectionName={currentCollectionName}
        />
      )}
      {openRenameModal && (
        <RenameCollectionModal
          closeModal={setOpenRenameModal}
          collectionName={currentCollectionName}
        />
      )}
    </Main>
  );
}

export default CollectionListPage;
