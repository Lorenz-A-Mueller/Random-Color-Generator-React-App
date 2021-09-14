/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = css`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5em;
`;

export default function InputField(props) {
  return (
    <input
      css={style}
      value={props.value}
      onChange={(event) => props.handleChange(event)}
      placeholder="Custom Hue..."
    />
  );
}
