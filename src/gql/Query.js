import { gql } from "@apollo/client";

export const GET_ANIME = gql`
  {
    Page {
      media(sort: POPULARITY_DESC) {
        id
        coverImage {
          large
        }
        title {
          romaji
          english
          native
        }
      }
    }
  }
`;
