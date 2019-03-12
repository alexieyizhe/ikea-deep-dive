import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';



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
      <Text size='2em' weight='bold'>
        <ColorText color='primary'>2. Improved Support For Planning & Design</ColorText>
      </Text>
      <ParaText size='1.2em' weight='bold'>
        Buying furniture for a home is a significant investment. When {userName === 'Our customer' ? userName.toLowerCase() : userName} walks into IKEA to finish furnishing their living room, they may have little idea how to achieve the feng-shui all the perfectly laid-out cubes in IKEA seem to have.
      </ParaText>
      <ParaText size='1.2em' weight='bold'>
        If {userName === 'Our customer' ? userName.toLowerCase() : userName} looks for help, the only options they may find are computer booths running IKEA's online planner, and sometimes a representative that can provide product information. While this is helpful for those just looking to visualize what their purchases will look like in a custom space, it is of little use to those looking for design advice and guidance.
      </ParaText>
    </SlideWrapper>
  );
};
