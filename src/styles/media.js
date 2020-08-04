import { css } from 'styled-components';

const sizes = {
  desktop: 1000,
  tablet: 768,
  phone: 480,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSIZE = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSIZE}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
