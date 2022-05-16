# Anime Collection Project

An anime list that allows user to see a list of 10 animes per page and click on each one of them to see the details of those anime. User can also have a collection that can be created through my collection page. Besides creating a new collection, user can also remove an existing collection. Clicking in one of the collection will direct user into the collection detail page where user can see all of the animes that has been added to the collection from the anime detail page. From this page, user can remove the specific anime that they no longer want to be on the list. 

Project link: https://popularanimelist.netlify.app/

## Technicalities: 

1. This project is created with **React.js** using Create React App for template
2. The site is using **mobile-first** approach and is a **Single Page Application (SPA)**
3. Anime details is taken using **GraphQL** from [AniList GraphQL API](https://anilist.gitbook.io/anilist-apiv2-docs/overview/graphql/getting-started) and using [**Apollo Client**](https://www.apollographql.com/docs/react/get-started/)
4. For the CSS, the site uses a library called [**emotion**](https://emotion.sh/docs/introduction)
5. React **localStorage** is used to store the collection data and anime list inside the collection

## Details: 

#### Anime List Page: 
- Only 10 anime is visible per page
- Shows anime title and cover banner taken from the API
- Page has a pagination functionality implemented using useState and the API

#### Anime Detail Page: 
- Clicking on one of the anime in the anime list page will direct user to this page depending on the anime id
- Details shown are as follows: 
  - Alias
  - Description
  - Status
  - Genre
  - Number of episodes
  - Average duration per episodes
  - Rating
- User can also see the list of collection where the anime is already added into
- User can also add this anime into a collection of their choice 

#### Collection List Page: 
- User can see a list of collection that they already have
- Each item shows collection name and the banner of the first anime they added to the collection
- Collection has a default picture if there is no anime in the collection
- User can also remove collection from this page by clicking the remove button on the side of the collection name
- User can also add a new collection with default profile picture and name from this page

#### Collection Detail Page: 
- User can see the list of anime that is already added in this collection
- The anime only shows the banner and title that are clickable to direct user to anime detail page
- User can also remove the specific anime from the current collection



*Note: *
- *Collection name is unique and doesn't have special character*
- *Pages are updated without a page reload after adding or removing element from the list*


