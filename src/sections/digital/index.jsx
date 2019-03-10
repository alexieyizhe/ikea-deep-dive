import React from 'react';
import PageWrapper from '../../components/PageWrapper';

import Intro from "./slides/intro";
import App from "./slides/app";
import Website from "./slides/website";

export default () => (
  <PageWrapper>
    <Intro />
    <App />
    <Website />
  </PageWrapper>
);
