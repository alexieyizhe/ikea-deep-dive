import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Bedroom from '../../../../static/physical.gif';


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
      <Display img={Bedroom}>
        <ParaText size='1.2em' weight='bold'>
          IKEA's stores are a strong presence: both <i>physically</i>, as expansive buildings adorned with <ColorText color='primary'>Swedish</ColorText> <ColorText color='darksecondary'>colours</ColorText>, and <i>conceptually</i>, as the hub of their services and operations. Their brick-and-mortar stores, being their largest interactive channel, cater to a wide range of demographics, offering services like <TextReveal label={<span>🎪</span>} reveal={<span>playgrounds</span>}/> for children and families, a <TextReveal label={<span>🍴</span>} reveal={<span>restaurant</span>}/> that serves high quality and localized food options, and battery recycling and electric car charging for the <TextReveal label={<span>	🌿</span>} reveal={<span> environmentally conscious.</span>}/>
        </ParaText>
      </Display>
    </SlideWrapper>
  );
};
