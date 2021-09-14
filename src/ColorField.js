/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

export default function ColorField(props) {
  const colorTransition = keyframes`
      from {
        background-color: ${props.oldColor}
      }
      to {
        background-color: ${props.color};
      }
    }
  `;

  const width = props.customBox ? props.customBox + 'px' : '100%';

  const style = css`
    width: ${width};
    max-width: 100%; /* use only 100% if the user's px value ends up bigger */
    height: 30%;
    background-color: ${props.oldColor};
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: ${colorTransition};
    animation-delay: 0.2s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  `;
  return (
    <div css={style}>
      <p>{props.color}</p>
    </div>
  );
}
