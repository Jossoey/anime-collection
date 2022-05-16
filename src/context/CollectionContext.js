import { createContext, useState } from "react";

const CollectionContext = createContext({
  animeCollection: {},
  totalCollection: 0,
  addCollection: (collectionName) => {},
  removeCollection: (collectionName) => {},
  changeCollectionName: (collectionName) => {},
  addToCollection: (collectionName, anime) => {},
  removeFromCollection: (collectionName, anime) => {},
});

const format = /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/;

export function CollectionContextProvider(props) {
  const [animeCollection, setAnimeCollection] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("animeCollection")) || {
      collection: [],
    };
    return localData;
  });

  function addCollectionHandle(collectionName) {
    setAnimeCollection((prevCollection) => {
      if (
        !prevCollection.collection.some(
          (item) => item.name === collectionName
        ) &&
        !format.test(collectionName)
      ) {
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
      }
      return prevCollection;
    });
  }

  function removeCollectionHandle(collectionName) {
    const updatedCollection = animeCollection.collection.filter(
      (item) => item.name !== collectionName
    );
    setAnimeCollection((prevCollection) => {
      prevCollection.collection = updatedCollection;
      return prevCollection;
    });
    localStorage.setItem("animeCollection", JSON.stringify(animeCollection));
  }

  function changeCollectionNameHandle(collectionName) {
    console.log(collectionName);
  }

  function addToCollectionHandle(collectionName, anime) {
    let oneCollection = animeCollection.collection.find(
      (item) => item.name === collectionName
    );

    if (oneCollection.anime.length === 0) {
      oneCollection.img = anime.coverImage.large;
    }

    if (!oneCollection.anime.find((item) => item.id === anime.id)) {
      oneCollection.anime.push(anime);
    } else {
      alert("Anime is already in the collection");
    }

    setAnimeCollection((prevCollection) => {
      prevCollection.collection.map((item) => {
        if (item.name === collectionName) {
          return {
            name: oneCollection.name,
            img: oneCollection.img,
            anime: oneCollection.anime,
          };
        }
        return item;
      });
      return prevCollection;
    });
    localStorage.setItem("animeCollection", JSON.stringify(animeCollection));
  }

  function removeFromCollectionHandle(collectionName, animeId) {
    const oneCollection = animeCollection.collection.find(
      (item) => item.name === collectionName
    );

    const updatedAnime = oneCollection.anime.filter(
      (anime) => anime.id !== animeId
    );

    setAnimeCollection((prevCollection) => {
      prevCollection.collection.map((item) => {
        if (item.name === collectionName) {
          item.anime = updatedAnime;
        }
        return item;
      });
      return prevCollection;
    });
    localStorage.setItem("animeCollection", JSON.stringify(animeCollection));
  }

  const context = {
    animeCollection: animeCollection,
    totalCollection: animeCollection.collection.length,
    addCollection: addCollectionHandle,
    removeCollection: removeCollectionHandle,
    changeCollectionName: changeCollectionNameHandle,
    addToCollection: addToCollectionHandle,
    removeFromCollection: removeFromCollectionHandle,
  };

  return (
    <CollectionContext.Provider value={{ context }}>
      {props.children}
    </CollectionContext.Provider>
  );
}

export default CollectionContext;
