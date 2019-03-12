import React from 'react';
import Helmet from "react-helmet";
import { ThemeProvider } from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import siteTheme, { GlobalStyles } from '../utils/siteStyles';
import { sectionBgColors } from '../utils/siteData';
import { SiteContextConsumer, SiteContextProvider } from "../utils/siteContext";
import Favicon from "../../static/favicon.png";

import Background from '../components/Background';
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
    <SiteContextProvider>
      <Background />
      <SiteContextConsumer>
        {({ state, dispatch }) => (
          <ReactFullpage
            navigation
            loopHorizontal={false}
            slidesNavigation
            resetSliders
            controlArrows={false}
            onLeave={(origin, destination) => {
              // console.log(origin, destination, state);
              dispatch({
                type: 'UPDATE_COLOR',
                color: sectionBgColors[destination.index].slideColors[state.curSlide[destination.index]]
              });
            }}
            onSlideLeave={(section, origin, destination) => {
              console.log(section.index, origin.index, destination.index);
              dispatch({ type: 'UPDATE_CURSLIDE', section: section.index, slide: destination.index });
              dispatch({
                type: 'UPDATE_COLOR',
                color: sectionBgColors[section.index].slideColors[destination.index]
              });
            }}
            render={({ state, fullpageApi }) => {

              return (
                <ReactFullpage.Wrapper>
                  <GlobalStyles />
                  <Helmet>
                    <title>IKEA: A Reflection</title>
                    <meta
                      name="description"
                      content="A reflection paper on IKEA as a business."
                    />
                    <link
                      rel="icon"
                      href={Favicon}
                      sizes={["16x16", "32x32", "64x64", "128x128"]}
                      type="image/ico"
                    />
                  </Helmet>

                  <Hero />
                  <Intro fullpageApi={fullpageApi} />
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
        )}
      </SiteContextConsumer>
    </SiteContextProvider>
  </ThemeProvider>
);
