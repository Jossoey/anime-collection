import { gql } from "@apollo/client";

export const GET_ANIME = gql`
  query (
    $page: Int
    $perPage: Int
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
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