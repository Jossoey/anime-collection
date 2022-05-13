import { useContext } from "react";
import CollectionContext from "../context/CollectionContext";
import { useState } from "react";

function CollectionListPage() {
  const collections = useContext(CollectionContext);
  const [value, setValue] = useState("");

  let content;

  const clickHandle = (e) => {
    e.preventDefault();
    collections.context.addCollection(value);
  };

  if (collections.context.totalCollection === 0) {
    content = <p>You don't have any collection</p>;
  } else {
    content = collections.context.animeCollection.collection;
  }

  return (
    <div>
      <h2>List of Collection</h2>
      {content.map((content) => {
          return (
            <div key={content.name}>item</div>
          );
      })}
      <form>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={clickHandle}>Add new collection</button>
      </form>
    </div>
  );
}

export default CollectionListPage;
