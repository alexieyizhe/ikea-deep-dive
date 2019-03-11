import { css, createGlobalStyle } from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLightbulb,
  faExclamation,
  faTimes,
  faCheck,
  faDoorClosed,
  faDoorOpen,
  faQuestion,
  faChevronUp,
  faChevronDown,
  faChevronCircleLeft,
  faTrophy,
  faMars,
  faVenus,
  faGenderless,
  faCompressArrowsAlt,
  faHandsHelping,
  faLocationArrow,
  faAd,
  faDolly,
  faStore,
  faHeadset,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";


library.add(
  faLightbulb,
  faExclamation,
  faTimes,
  faCheck,
  faDoorClosed,
  faDoorOpen,
  faQuestion,
  faChevronUp,
  faChevronDown,
  faChevronCircleLeft,
  faTrophy,
  faMars,
  faVenus,
  faGenderless,
  faCompressArrowsAlt,
  faHandsHelping,
  faLocationArrow,
  faAd,
  faDolly,
  faStore,
  faHeadset,
  faMobileAlt
);

export const displaySizes = {
  desktop: 2160,
  tablet: 1024,
  phone: 600
};

// Iterate through display sizes and create media template for responsive design
export const mediaSize = Object.keys(displaySizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${displaySizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// SITE THEME STUFF
export const colors = {
  primary: '#094ea7',
  secondary: '#edc809',

  darkprimary: '#04316b',
  darksecondary: '#c9a900'
};

export const sizes = {
  heading: {
    big: '2.5em',
    normal: '2em',
    small: '1.5em'
  },
  bodyText: {
    big: '1.2em',
    normal: '1em',
    small: '0.8em',
    tiny: '0.5em'
  }
}

export const app = {
  font: {
    family: 'Work Sans',
    weight: {
      bold: '600',
      normal: '500',
      light: '400',
    },
  },
  border: {
    width: '2px',
    radius: '6px'
  },
  container: {
    padding: '0.8em'
  }
};


export default {
  colors,
  app,
  sizes
};


export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: ${app.font.family}, -apple-system, BlinkMacSystemFont, sans-serif;

    & #fp-nav li a span {
      background-color: ${colors.primary};
      color: ${colors.primary}
    }

    & .fp-slidesNav li a span {
      background-color: ${colors.secondary};
      color: ${colors.secondary}
    }
  }
`;
