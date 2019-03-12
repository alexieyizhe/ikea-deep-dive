import React from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';

const IntroText = styled(Text)`
  text-align: center;
`;


export default () => {

  return (
    <SlideWrapper>
      <Text size='4em' weight='bold'>Let's&nbsp;</Text>
      <Text size='4.5em' weight='bold'>Get&nbsp;</Text>
      <Text size='5.5em' weight='bold'>Physical</Text>
    </SlideWrapper>
  );
};
