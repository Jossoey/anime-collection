import { css } from "@emotion/react";

function Card(props) {
  return (
    <div
      css={css`
        margin: 1rem;
        padding: 1rem;
        background-color: grey;
      `}
    >
      {props.children}
    </div>
  );
}

export default Card;
