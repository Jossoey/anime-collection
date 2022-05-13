import { gql } from "@apollo/client";

const GET_ANIME = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(sort: POPULARITY_DESC, type: ANIME) {
        id
        coverImage {
          large
        }
        title {
          english
        }
      }
    }
  }
`;

const GET_ONE_ANIME = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      coverImage {
        large
      }
      title {
        english
        native
        userPreferred
      }
      description
      episodes
      averageScore
      genres
      status
      duration
    }
  }
`;

export {GET_ANIME, GET_ONE_ANIME};