import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";

import { GET_ONE_ANIME } from "../gql/Query";

const ItalicP = styled.p`
  font-style: italic;
`;


function AnimeDetailPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ONE_ANIME, {
    variables: { id: id },
  });

  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p>
        {isReadMore ? text.slice(0, 200) : text}
        <span onClick={toggleReadMore}>
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  // console.log(data);
  return (
    <div>
      <img src={data.Media.coverImage.large}></img>
      <div>
        <h2>{data.Media.title.english}</h2>
        <ItalicP>
          Other names: {data.Media.title.native} {" , "}
          {data.Media.title.userPreferred}
        </ItalicP>
        <ReadMore>{data.Media.description}</ReadMore>
        <div>
          <p>Status: {data.Media.status}</p>
          <p>Genre: {data.Media.genres.join(", ")}</p>
          <p>Episodes: {data.Media.episodes}</p>
          <p>Duration: {data.Media.duration} min/ep</p>
          <p>Average score: {data.Media.averageScore / 10}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetailPage;
