import React from 'react';
import PageWrapper from '../../components/PageWrapper';

import Intro from './slides/intro';
import About from './slides/about';
import Personal from './slides/personal';

export default () => (
  <PageWrapper>
    <Intro />
    <About />
    <Personal />
  </PageWrapper>
);
