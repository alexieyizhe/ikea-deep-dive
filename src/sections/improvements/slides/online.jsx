import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Old from '../../../../static/broken.gif';


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
        <ColorText color='primary'>1. A More Cohesive Online Experience</ColorText>
      </Text>
      <Display img={Old}>
        <ParaText size='1.2em' weight='bold'>
          While they are making strides forward in providing more online functionality through their website and mobile channels, there exists significant improvements that can be made to improve the UI & UX of the IKEA online experience.
        </ParaText>
        <ParaText size='1.2em' weight='bold'>
          Even though their website follows their ideals of Scanadanavian minimalism, there are some missing essential elements key to helping a user find a product on the website. The site suffers from a little excessive use of text where icons may suffice, and splitting their sites and social media presence based on countries can cause segmentation, and annoying/confusing experiences for some visitors.
        </ParaText>
      </Display>
    </SlideWrapper>
  );
};
