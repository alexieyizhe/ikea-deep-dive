import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';

import Maze from '../../../../static/maze.png';


const ParaText = styled(Text)`
  line-height: 1.5;
`;


const ColorText = styled.span`
  color: ${props => props.theme.colors.primary};
`;

export default () => {

  const { state: { userName } } = useContext(SiteContext);


  return (
    <SlideWrapper>
      <Display img={Maze} right>
        <ParaText size='1.2em' weight='bold'>
          Each store is designed like a winding passage, leading you through dozens of subsections. Where other furniture stores display items of the same type with each other, IKEA splits its displays into small rooms, each furnished around their own cohesive theme.
        </ParaText>
        <ParaText size='1.2em' weight='bold'>
          This allows shoppers like <ColorText>{userName}</ColorText> to not only visualize how a couch fits into an actual room, but conveniently offers optimal pairings of a couch with, say a coffee table, should someone need more than one article of furniture (and even if you don't, you're tempted to purchase more anyways)!
        </ParaText>
      </Display>
    </SlideWrapper>
  );
};
