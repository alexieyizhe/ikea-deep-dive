import React from 'react';
import PageWrapper from '../../components/PageWrapper';

import Intro from './slides/intro';
import Store from './slides/store';
import Maze from './slides/maze';

import Quote from './slides/quote';
import Personal from './slides/personal';


export default () => (
  <PageWrapper>
    <Intro />
    <Store />
    <Maze />
    <Quote />
    <Personal />
  </PageWrapper>
);
