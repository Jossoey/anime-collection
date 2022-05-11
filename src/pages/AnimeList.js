import { useQuery } from "@apollo/client";
import { GET_ANIME } from "../gql/Query";

function AnimeListPage() {
  const { loading, error, data } = useQuery(GET_ANIME);
  console.log(data.Page.media);

  return (
    <div>
      <h1>ANIME LIST PAGE</h1>
      <header>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            {data.Page.media.map((anime) => {
                return (
                    // need to change to Anime.js and pass variables
                    <div>
                        <img src={anime.coverImage.large}></img>
                        <p>{anime.title.english}</p>
                    </div>
                );
            })}
          </div>
        )}
      </header>
    </div>
  );
}

export default AnimeListPage;
