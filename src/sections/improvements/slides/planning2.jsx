import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Planning from '../../../../static/room2.gif';


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
      <Display img={Planning}>
        <ParaText size='1.2em' weight='bold'>
          A potential solution to this lack of help can be integrated in the form of an assistant for home improvement help. IKEA Business consultants are available for advice, but they cater mostly to large businesses, and information on how to book an appointment is nestled deep in a corner of IKEA's website (see Improvement #1!).
        </ParaText>
        <ParaText size='1.2em' weight='bold'>
          A design assistant who aids in crafting an appealing space would attract customers who are looking for a more comprehensive approach to furnishing their living establishment, and as an additional bonus, would provide a touchpoint for great customer service and potentially advertising services/products the customer did not know they needed/wanted.
        </ParaText>
      </Display>
    </SlideWrapper>
  );
};
