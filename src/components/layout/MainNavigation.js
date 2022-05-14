import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const Heading = styled("h2")`
  background-color: #212121;
  padding: 2rem;
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 10;
  text-align: center;
  font-size: 6vw;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

function MainNavigation() {
  return (
    <Heading>
      <NavLink to="/">Anime List</NavLink>
      <NavLink to="/collection">My Collection</NavLink>
    </Heading>
  );
}

export default MainNavigation;
