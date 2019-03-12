import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Business from '../../../../static/business.gif';


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
      <Display img={Business}>
        <ParaText size='1.2em' weight='bold'>
          IKEA has always focused their design and business around their identity of simplicity and affordability. They pay a large amount of attention to creating well-designed, durable furniture, without increasing the price - so as to remain accessible to a large audience.
        </ParaText>
        <ParaText size='1.2em' weight='bold'>
          There's always a need to optimize the process that their furniture goes through, and they've done so by cutting out fabrication and shipping costs on their end through packing their products flat - the customer absorbs the assembly time, but also the savingd as well. However, what they do not optimize is the customer experience. They offer changes in their product design, store layout, and even localized food to fit regional tastes and stay culturally relevant to make customers comfortable.
        </ParaText>
      </Display>
    </SlideWrapper>
  );
};
