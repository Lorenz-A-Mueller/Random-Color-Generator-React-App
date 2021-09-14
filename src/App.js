/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import convert from 'color-convert';
import { useState } from 'react';
import Button from './Button.js';
import ColorField from './ColorField.js';
import Header from './Header.js';
import InputBox from './InputBox.js';
import InputField from './InputField.js';
import LightDark from './LightDark.js';
import OuterBorder from './OuterBorder.js';

let userValue;
let userBox;
let customHue = 0;
const outerContainerStyle = css`
  position: absolute;
  left: 20%;
  width: 60%;
  top: 20%;
  height: 70%;
`;

const innerContainerStyle = css`
  left: 5%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  height: 100%;
`;

const centerContainerStyle = css`
  height: 30%;
  display: grid;
  grid-template-columns: repeat(4, 22%);
  grid-gap: 4%;
  grid-template-rows: 1fr 1fr;
`;

let randomColor;

export default function App() {
  const [color, setColor] = useState('#FF0000');
  const [oldColor, setOldColor] = useState('#AEB5AD');
  const [customLightness, setCustomLightness] = useState('');
  const [customBox, setCustomBox] = useState(0);

  function handleClick() {
    const randomSaturation = 30 + Math.floor(Math.random() * 41);
    const randomLightness = 30 + Math.floor(Math.random() * 41);
    const randomHue = Math.floor(Math.random() * 361);
    console.log(convert.hsl.hex(randomHue, randomSaturation, randomLightness));
    randomColor =
      '#' +
      convert.hsl.hex(
        customHue ? customHue : randomHue,
        randomSaturation,
        customLightness ? customLightness : randomLightness,
      );
    setOldColor(color);
    setColor(randomColor);
    if (/^\d+$/.test(userBox)) {
      setCustomBox(userBox);
    }
  }

  function handleHueChange(event) {
    userValue = event.currentTarget.value;
    switch (userValue.toLowerCase()) {
      case 'red':
        customHue = 360;
        break;
      case 'orange':
        customHue = 30;
        break;
      case 'yellow':
        customHue = 60;
        break;
      case 'olive':
        customHue = 90;
        break;
      case 'green':
        customHue = 120;
        break;
      case 'teal':
        customHue = 150;
        break;
      case 'cyan':
        customHue = 180;
        break;
      case 'blue':
        customHue = 210;
        break;
      case 'violet':
        customHue = 240;
        break;
      case 'purple':
        customHue = 270;
        break;
      case 'magenta':
        customHue = 300;
        break;
      case 'scarlet':
        customHue = 330;
        break;

      default:
        customHue = 0;
    }
  }

  function handleBoxChange(event) {
    userBox = event.currentTarget.value;
  }

  function handleCheck(event) {
    if (event.currentTarget.id === 'light') {
      setCustomLightness(70);
    } else if (event.currentTarget.id === 'dark') {
      setCustomLightness(30);
    } else {
      setCustomLightness(0);
    }
  }

  return (
    <div>
      <div css={outerContainerStyle}>
        <OuterBorder />
        <div css={innerContainerStyle}>
          <Header />
          <div css={centerContainerStyle}>
            <InputField handleChange={handleHueChange} />
            <InputBox handleChange2={handleBoxChange} />
            <LightDark handleCheck={handleCheck} />
            <Button handleClick={handleClick} color={color} value={userValue} />
          </div>
          <ColorField color={color} oldColor={oldColor} customBox={customBox} />
        </div>
      </div>
    </div>
  );
}
