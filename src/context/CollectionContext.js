import { createContext, useState } from "react";

const CollectionContext = createContext({
  animeCollection: {},
  totalCollection: 0,
  addCollection: (collection) => {},
  removeCollection: (collectionName) => {}
});

export function CollectionContextProvider(props) {
    const [animeCollection, setAnimeCollection] = useState(() => {
      const localData = JSON.parse(localStorage.getItem("animeCollection")) || {
        collection: [],
      };
      return localData;
    });

    function addCollectionHandle(collectionName) {
      setAnimeCollection((prevCollection) => {
        if (!prevCollection.collection.some((item) => item.name === collectionName)) {
          prevCollection.collection.push({ name: collectionName, anime: []});
          localStorage.setItem(
            "animeCollection",
            JSON.stringify(animeCollection)
          );
        } else {
          alert("Collection name already exist!");
        }
        return prevCollection;
      });
    }

    function removeCollectionHandle(collectionName) {
        console.log(collectionName);
    }

    const context = {
      animeCollection: animeCollection,
      totalCollection: animeCollection.collection.length,
      addCollection: addCollectionHandle,
      removeCollection: removeCollectionHandle
    };

  return (
    <CollectionContext.Provider value={{context}}>
      {props.children}
    </CollectionContext.Provider>
  );
}

export default CollectionContext;
