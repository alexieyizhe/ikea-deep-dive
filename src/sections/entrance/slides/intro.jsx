import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';
import Heading from '../../../components/Heading';

const IntroText = styled(Text)`
  text-align: left;
`;


export default () => {
  const { state: { userName } } = useContext(SiteContext);

  return (
    <SlideWrapper>
      <Heading size='4em'>
        Welcome to IKEA, {userName}!
      </Heading>
    </SlideWrapper>
  );
};
