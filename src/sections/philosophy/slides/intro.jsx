import React from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';

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
      <IntroHeading1 size='4em' weight='bold'>Philosophy</IntroHeading1>
      <IntroHeading2 size='4em' weight='bold'>&</IntroHeading2>
      <IntroHeading3 size='4em' weight='bold'>Design</IntroHeading3>
    </SlideWrapper>
  );
};
