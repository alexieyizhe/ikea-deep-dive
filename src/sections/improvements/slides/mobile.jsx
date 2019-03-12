import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Broken from '../../../../static/broken.png';


const ParaText = styled(Text)`
  line-height: 1.5;
  color: rgb(42, 42, 42);
`;


const ColorText = styled.span`
  color: ${props => props.theme.colors[props.color] || props.color};
`;

export default () => {

  const { state: { userName } } = useContext(SiteContext);


  return (
    <SlideWrapper>
      <Display img={Broken} right>
        <ParaText size='1.2em' weight='bold'>
          A mobile companion app as a touchpoint providing additional tools for shoppers in IKEA stores has huge potential to improve the shopping experience for customers. However, the potential integration of mobile and physical shopping is being held back severely by the subpar experience of using the IKEA mobile app. The app currently has a <ColorText color='red'>2.3/5</ColorText> rating on the App Store, and a mediocre app can cause annoyances for users that detract from their desire to shop at IKEA - accomplishing the exact opposite of what a companion app should be doing.
        </ParaText>
        <ParaText size='1.2em' weight='bold'>
          IKEA needs to address this issue by devoting more attention to the mobile channel, much like they devote effort to perfecting their furniture design.
        </ParaText>
      </Display>
    </SlideWrapper>
  );
};
