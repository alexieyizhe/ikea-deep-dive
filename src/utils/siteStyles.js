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
  faMobileAlt,
  faHandPointRight,
  faAngleRight,
  faCaretRight,
  faAngleDown,
  faAngleLeft,
  faAngleUp,
  faCaretDown,
  faCaretLeft,
  faCaretUp,
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faThumbsDown,
  faThumbsUp,
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
  faMobileAlt,
  faHandPointRight,
  faAngleRight,
  faCaretRight,
  faAngleDown,
  faAngleLeft,
  faAngleUp,
  faCaretDown,
  faCaretLeft,
  faCaretUp,
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faThumbsDown,
  faThumbsUp,
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
    big: '1.4em',
    normal: '1.1em',
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
    radius: '50px'
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
    font-weight: ${app.font.weight.bold};

    & #fp-nav li a span {
      background-color: ${colors.primary};
      color: ${colors.primary};
    }

    & .fp-tooltip {
      color: ${colors.primary} !important;
      font-family: ${app.font.family}, -apple-system, BlinkMacSystemFont, sans-serif !important;
    }

    & #fp-nav li a.active + .fp-tooltip {
      overflow: visible;

      &:before {
        content: '🚶🏻‍';
        font-size: 1.2em;
        position: absolute;
        left: -1.2em;
        top: -5px;
      }
    }

    & .fp-slidesNav li a span {
      background-color: ${colors.secondary};
      color: ${colors.secondary};
    }
  }
`;
