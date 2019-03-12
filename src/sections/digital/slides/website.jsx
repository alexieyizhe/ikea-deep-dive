import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Computer from '../../../../static/pc.gif';


const ParaText = styled(Text)`
  line-height: 1.5;
`;


const ColorText = styled.span`
  color: ${props => props.theme.colors[props.color] || props.color};
`;

export default () => {

  const { state: { userName } } = useContext(SiteContext);


  return (
    <SlideWrapper>
      <Display img={Computer}>
        <ParaText size='1.2em' weight='bold'>
          While their physical stores serve up a wonderfully engaging experience, no company is complete in the information age without an online presence. Over <TextReveal label={<span>📈</span>} reveal={<span>80%</span>}/> of IKEA shoppers browse online before making the visit to a physical store, so a capable and easy-to-use website is important in driving sales and retaining customer engagement.
        </ParaText>
        <ParaText size='1.2em' weight='bold'>
          IKEA.com is both an interactive and non-interactive channel for customers to <TextReveal label={<span>🛒</span>} reveal={<span>browse</span>}/> the selection of IKEA products, obtain <TextReveal label={<span>🛎</span>} reveal={<span>support</span>}/> with issues they're having, and make use of other services that streamline the process someone goes through to buy furniture.
        </ParaText>
      </Display>
    </SlideWrapper>
  );
};
