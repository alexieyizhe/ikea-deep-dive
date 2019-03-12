import React from 'react';
import PageWrapper from '../../components/PageWrapper';

import Intro from "./slides/intro";
import Website from "./slides/website";
import App from "./slides/app";
import Personal from "./slides/personal";

export default () => (
  <PageWrapper>
    <Intro />
    <Website />
    <App />
    <Personal />
  </PageWrapper>
);
