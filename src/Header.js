/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Header() {
  const style = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30%;
  `;

  return (
    <div css={style}>
      <h1>Random Color Generator</h1>
      <h2>(smooth Version)</h2>
    </div>
  );
}
