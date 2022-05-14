import { useParams } from "react-router-dom";

function CollectionDetailPage() {
  const { name } = useParams();
  const localData = JSON.parse(localStorage.getItem("animeCollection"));

  const collection = localData.collection.filter((item) => {return item.name === name})[0];
  console.log(collection.anime);

  if(collection.anime.length === 0) {
      return(
        <p>This collection is empty</p>
      );
  }

  return (
      <div>
        {collection.anime.map((anime) => {
            return(
                <div>anime.name</div>
            );
        })}
      </div>
  );
}

export default CollectionDetailPage;
