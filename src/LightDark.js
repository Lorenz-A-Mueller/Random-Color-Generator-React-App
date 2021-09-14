/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const outerBoxStyle = css`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const innerBoxStyle = css`
  width: max-content;
`;

export default function LightDark(props) {
  return (
    <div css={outerBoxStyle}>
      <div div css={innerBoxStyle}>
        <input
          id="no_lightness"
          type="radio"
          name="lightness"
          onChange={(event) => props.handleCheck(event)}
        />
        <label htmlFor="light">Random Lightness</label>
      </div>
      <div div css={innerBoxStyle}>
        <input
          id="light"
          type="radio"
          name="lightness"
          onChange={(event) => props.handleCheck(event)}
        />
        <label htmlFor="light">Light</label>
      </div>
      <div div css={innerBoxStyle}>
        <input
          id="dark"
          type="radio"
          name="lightness"
          onChange={(event) => props.handleCheck(event)}
        />

        <label htmlFor="dark">Dark</label>
      </div>
    </div>
  );
}
