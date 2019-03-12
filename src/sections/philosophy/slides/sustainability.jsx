import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Tree from '../../../../static/tree.gif';


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
      <Display img={Tree} right>
        <ParaText size='1.2em' weight='bold'>
          Another key initiative that IKEA believes in is sustainability. Tying into the theses about the future, taking responsibility, and innovating, IKEA is involved in numerous efforts around promoting a renewable and green future.
        </ParaText>
        <ParaText size='1.2em' weight='bold'>
          They have a line of 'Sustainability life at home' products, they own more wind turbines than any other store, and they promote circular usage and zero waste as principles of their business. With more and more consumers looking for brands that show an appreciative interest in sustainability, it's won over the hearts of many customers and serves to make the world a better place while also benefitting their business at the same time.
        </ParaText>
      </Display>
    </SlideWrapper>
  );
};
