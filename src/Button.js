//  /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = css`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;

  font-size: 2em;
  border: solid black 3px;
  &:hover {
    box-shadow: 10px 10px;
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;

export default function Button(props) {
  return (
    <button onClick={() => props.handleClick()} css={style}>
      Get Random Color!
    </button>
  );
}
