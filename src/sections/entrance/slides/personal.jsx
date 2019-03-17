import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Logo from '../../../../static/logo.png';

const ParaText = styled(Text)`
  line-height: 1.5;
`;

const ColorText = styled.span`
  color: ${props => props.theme.colors[props.color] || props.color};
`;

const Image = styled.img`

  max-width: 15vw;
`;


export default () => {
  return (
    <SlideWrapper>
      <Image data-src={Logo} />
      <ParaText size='big' weight='bold'>
        IKEA has tried to set itself apart through their affordable, well designed furniture, as well as key values like customer loyalty, sustainability, and overall customer experience.
      </ParaText>
      <ParaText size='big' weight='bold'>
        The mere mention of IKEA brings with it fond memories of strolling through halls of perfectly decorated rooms, marvelling at their meticulous design.
        It conjures up elegant and sleek design, but not at the expensive of price.
        On top of that, who can forget their amazing <TextReveal label={<span>🍲</span>} reveal={<span>food options</span>}/> - not just for a furniture store, but on the calibre of restaurants?
      </ParaText>
    </SlideWrapper>
  );
};
