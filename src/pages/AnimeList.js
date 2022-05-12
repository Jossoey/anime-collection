import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ANIME } from "../gql/Query";

function AnimeListPage(at) {
  const perPage = 10;

  const [page, setPage] = useState(0);
  const { loading, error, data } = useQuery(GET_ANIME, {variables: {perPage: perPage, page: page}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>ANIME LIST PAGE</h1>
      <div>
        {data.Page.media.map((anime) => {
          return (
            <div>
              <img src={anime.coverImage.large}></img>
              <p>{anime.title.english}</p>
            </div>
          );
        })}
      </div>
      <button disabled={!page} onClick={() => setPage((prev) => prev - 1)}>Previous</button>
      <p>Page {page + 1}</p>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}

export default AnimeListPage;
