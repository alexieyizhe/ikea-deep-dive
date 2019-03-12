import React from 'react';
import PageWrapper from '../../components/PageWrapper';

import Intro from "./slides/intro";
import Online from "./slides/online";
import Mobile from "./slides/mobile";
import Planning from "./slides/planning";
import Planning2 from "./slides/planning2";


export default () => (
  <PageWrapper>
    <Intro />
    <Online />
    <Mobile />
    <Planning />
    <Planning2 />
  </PageWrapper>
);
