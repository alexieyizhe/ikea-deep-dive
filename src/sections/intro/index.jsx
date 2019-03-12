import React from 'react';
import PageWrapper from '../../components/PageWrapper';

import Intro from './slides/intro';
import Info from './slides/info';
import Profile from './slides/profile';
import CJM from './slides/cjm';

export default ({ fullpageApi }) => (
  <PageWrapper>
    <Intro fullpageApi={fullpageApi} />
    <Info fullpageApi={fullpageApi} />
    <Profile />
    <CJM />
  </PageWrapper>
);
