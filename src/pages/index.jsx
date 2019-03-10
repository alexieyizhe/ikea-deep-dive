import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import siteTheme, { GlobalStyles } from '../utils/siteStyles';

import Hero from '../sections/hero';
import Intro from '../sections/intro';
import Entrance from '../sections/entrance';
import Physical from '../sections/physical';
import Digital from '../sections/digital';
import Philosophy from '../sections/philosophy';
import Improvements from '../sections/improvements';
import Exit from '../sections/exit';

export default () => (
  <ThemeProvider theme={siteTheme}>
    <ReactFullpage
      navigation
      loopHorizontal={false}
      slidesNavigation
      controlArrows={false}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <GlobalStyles />

            <Hero />
            <Intro />
            <Entrance />
            <Physical />
            <Digital />
            <Philosophy />
            <Improvements />
            <Exit />

          </ReactFullpage.Wrapper>
        );
      }}
    />
  </ThemeProvider>

)
