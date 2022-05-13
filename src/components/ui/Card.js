import styled from "@emotion/styled";

const CenterDiv = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

function Card(props) {
  return <CenterDiv>{props.children}</CenterDiv>;
}

export default Card;
