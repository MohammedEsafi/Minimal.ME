import React from 'react';
import { SVG } from '../styles';

const Waves = ({ fill, side, addCSS }) => (
  <SVG viewBox="0 0 73.94 14.19" fill={fill} side={side} addCSS={addCSS} >
  	<title>Waves</title>
    <polyline points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83"></polyline>
  </SVG>
)

export default Waves;