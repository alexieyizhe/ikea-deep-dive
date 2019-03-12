import React from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';


export default () => {

  return (
    <SlideWrapper>
      <Text size='4em' weight='bold'><TextReveal label={<span>🏠</span>} reveal={<span>Room</span>}/> for Improvement</Text>
    </SlideWrapper>
  );
};
