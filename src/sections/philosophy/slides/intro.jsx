import React from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';

const IntroHeading1 = styled(Heading)`
  text-align: right;
  margin: auto;
  padding-right: 48%;
`;

const IntroHeading2 = styled(Heading)`
  text-align: center;
  margin: auto;
`;

const IntroHeading3 = styled(Heading)`
  text-align: left;
  margin: auto;
  padding-left: 48%;
`;

export default () => {

  return (
    <SlideWrapper>
      <Slide left>
        <IntroHeading1 size='4em' weight='bold'>Philosophy</IntroHeading1>
      </Slide>
      <Zoom>
        <IntroHeading2 size='4em' weight='bold'>&</IntroHeading2>
      </Zoom>
      <Slide right>
        <IntroHeading3 size='4em' weight='bold'>Design</IntroHeading3>
      </Slide>
    </SlideWrapper>
  );
};
