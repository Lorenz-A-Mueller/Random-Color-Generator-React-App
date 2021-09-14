/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = css`
  position: absolute;
  width: 100%;
  height: 100%;
  border: solid black 10px;
  z-index: -1;
`;

export default function OuterBorder() {
  return <div css={style} />;
}
