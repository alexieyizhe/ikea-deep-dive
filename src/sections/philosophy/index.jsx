import React from 'react';
import PageWrapper from '../../components/PageWrapper';

import Intro from "./slides/intro";
import Writeup from "./slides/writeup";
import Business from "./slides/business";
import Sustainability from "./slides/sustainability";
import Stats from "./slides/stats";
// import Hero from "./slides/hero";
// import CJM from "./slides/cjm";

export default () => (
  <PageWrapper>
    <Intro />
    <Writeup />
    <Business />
    <Sustainability />
    <Stats />
  </PageWrapper>
);
