import React from 'react';
import PageWrapper from '../../components/PageWrapper';

import Intro from './slides/intro';
import Profile from './slides/profile';
import CJM from './slides/cjm';

export default () => (
  <PageWrapper>
    <Intro />
    <Profile />
    <CJM />
  </PageWrapper>
);
