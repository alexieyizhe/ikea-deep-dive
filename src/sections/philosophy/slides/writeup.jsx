import React from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';


export default () => {

  return (
    <SlideWrapper>
      <Text size='1.2em' weight='bold'>
        IKEA's founder, Ingvar Kamprad, published 9 theses that he hoped to incorporate into IKEA:
        <ol>
          <li>The product range – our identity</li>
          <li>The IKEA spirit – a strong and living reality</li>
          <li>Profit gives us resources</li>
          <li>Reaching good results with small means</li>
          <li>Simplicity is a virtue</li>
          <li>Doing it a different way</li>
          <li>Concentration – important to our success</li>
          <li>Taking responsibility – a privilege</li>
          <li>Most things still remain to be done. A glorious future!</li>
        </ol>
        Even after his death in 2018, these virtues are still evident in the way IKEA operates today. As a customer, they've played a major role in the appeal and draw that IKEA holds for myself and many others.
      </Text>
    </SlideWrapper>
  );
};
