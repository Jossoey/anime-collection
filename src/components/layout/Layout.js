import MainNavigation from "./MainNavigation";
import styled from "@emotion/styled";

const Div = styled.div`
  background-color: #2d2d2d;
`;

function Layout(props) {
  return (
    <Div>
      <MainNavigation />
      <main>{props.children}</main>
    </Div>
  );
}

export default Layout;
