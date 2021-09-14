/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = css`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5em;
`;

export default function InputBox(props) {
  return (
    <input
      css={style}
      onChange={(event) => props.handleChange2(event)}
      placeholder="Custom Width"
    />
  );
}
