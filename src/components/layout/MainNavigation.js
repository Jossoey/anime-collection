import { Link } from "react-router-dom";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Heading = styled("h2")`
  background-color: ${(props) => props.bg};
  padding: 2rem;
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 10;
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
    <Heading bg="#212121">
      <NavLink to="/">Anime List</NavLink>
      <NavLink to="/collection">My Collection</NavLink>
    </Heading>
  );
}

export default MainNavigation;
