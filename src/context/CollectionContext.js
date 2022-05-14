import { createContext, useState } from "react";

const CollectionContext = createContext({
  animeCollection: {},
  totalCollection: 0,
  addCollection: (collectionName) => {},
  removeCollection: (collectionName) => {},
  changeName: (collectionName) => {},
  addAnime: (collectionName, anime) => {},
});

const format = /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/;

export function CollectionContextProvider(props) {
    const [animeCollection, setAnimeCollection] = useState(() => {
      const localData = JSON.parse(localStorage.getItem("animeCollection")) || {
        collection: [],
      };
      return localData;
    });

    function addCollectionHandle(collectionName, e) {
      setAnimeCollection((prevCollection) => {
        if (!prevCollection.collection.some((item) => item.name === collectionName) && !format.test(collectionName)) {
          prevCollection.collection.push({
            name: collectionName,
            img: "https://www.tibs.org.tw/images/default.jpg",
            anime: [],
          });
          localStorage.setItem(
            "animeCollection",
            JSON.stringify(animeCollection)
          );
        } else {
          alert("Collection name invalid");
          e.preventDefault();
        }
        return prevCollection;
      });
    }

    function removeCollectionHandle(collectionName) {
      console.log(collectionName);
    }

    function changeCollectionNameHandle(collectionName) {
      console.log(collectionName);
    }

    function addToCollectionHandle(collectionName, anime) {
      console.log(collectionName);
    }

    const context = {
      animeCollection: animeCollection,
      totalCollection: animeCollection.collection.length,
      addCollection: addCollectionHandle,
      removeCollection: removeCollectionHandle,
      changeName: changeCollectionNameHandle,
      addAnime: addToCollectionHandle,
    };

  return (
    <CollectionContext.Provider value={{context}}>
      {props.children}
    </CollectionContext.Provider>
  );
}

export default CollectionContext;
