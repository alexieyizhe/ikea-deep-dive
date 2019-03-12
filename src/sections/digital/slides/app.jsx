import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Phone from '../../../../static/phone.gif';


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
      <Display img={Phone}>
        <ParaText size='1.2em' weight='bold'>
          Mobile phones are becoming, if not already, the most essential and multi-functional item an individual carries with them on a day-to-day basis.
        </ParaText>
        <ParaText size='1.2em' weight='bold'>
          The IKEA mobile app is a hugely important channel that address the needs of a shopper that's planning to visit or is currently visiting a physical store. It aims to be the app you open when you have any furniture related needs, offering a personalized <TextReveal label={<span>🗃</span>} reveal={<span>catalogue</span>}/> of items with up-to-date information about stock, store hours, and a <TextReveal label={<span>🗒</span>} reveal={<span>shopping list</span>}/> replacing the stubby golf pencil and scrap paper of days past.
        </ParaText>
      </Display>
    </SlideWrapper>
  );
};
