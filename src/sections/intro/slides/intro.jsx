import React from 'react';
import styled from 'styled-components';
import { introData } from '../../../utils/siteData';
import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';

const IntroText = styled(Text)`
  text-align: center;
`;

export default () => (
  <SlideWrapper>
    {introData.map(p => (
      <IntroText size='big'>
        {p}
      </IntroText>
    ))}
  </SlideWrapper>
);
