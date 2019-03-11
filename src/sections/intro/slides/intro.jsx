import React from 'react';
import styled from 'styled-components';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';

const IntroText = styled(Text)`
  text-align: center;
`;

export default () => (
  <SlideWrapper>
    <IntroText size='big'>
      The mere mention of IKEA brings with it fond memories of strolling through halls of perfectly decorated rooms, marvelling at their meticulous design.
      It conjures up elegant and sleek design, but not at the expensive of price.
      On top of that, who can forget their amazing food options - not just for a furniture store, but on the calibre of restaurants?
    </IntroText>
    <IntroText size='big'>
      IKEA has been able to capture the idea of offering affordability and modern design, while operating on a philosophy of sustainability and environmental awareness.
      My aim with this interactive paper is to explore the nuances of IKEA's operating model through the experience of a customer.
    </IntroText>
  </SlideWrapper>
);
