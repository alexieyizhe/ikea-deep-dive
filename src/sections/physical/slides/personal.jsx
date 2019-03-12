import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

import Love from '../../../../static/love.png';

const ParaText = styled(Text)`
  line-height: 1.5;
  position: relative;
  top: -2em;
  color: rgb(217, 217, 217);
`;

const ColorText = styled.span`
  color: ${props => props.theme.colors[props.color] || props.color};
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 10vw;

  max-width: 25vw;

  z-index: -1;
`;


export default () => {

  const { state: { userName } } = useContext(SiteContext);

  return (
    <SlideWrapper>
      <ParaText size='1.2em' weight='bold'>
        In my own experience, IKEA is succeeding in their mission to make finding furniture more personal without being invasive. Their expertise from decades of refining their stores has taught them that shoppers these days appreciate help, but enjoy the process of <TextReveal label={<span>🔍</span>} reveal={<span>discovery</span>}/> equally as much. That's why IKEA simply <i> provides </i> all the necessary tools and services that one might need in a prolonged shopping experience, but they don't force you to use them.
      </ParaText>
      <ParaText size='1.2em' weight='bold'>
        Going to IKEA has always felt like a trip and never a quick stop. Items are set up much like exhibits in an art gallery for you to look at, an effective method in providing a sense of wonder. Additionally, the fact that this is done by professional home decorators makes a companion item to my desired purchase much more appealing when I see how great it looks next to the item I was meaning to buy.
      </ParaText>
      <ParaText size='1.2em' weight='bold'>
        Thinking back to <ColorText color='rgb(255, 255, 255)'>{userName}</ColorText>'s customer profile, we can see that they have a functional job of <TextReveal label={<span>🛋️</span>} reveal={<span>buying a couch</span>}/>. In an era of online shopping and quick delivery, their functional job may possibly be accomplished online much more quickly. However, they also have customer gains that include <strong>purchasing a couch that fits their personal taste</strong>, and <strong>feeling confident that this is the couch that they want</strong>. With something as subjective as purchasing a couch that will be the centerpiece of their living quarters for years to come, {userName} will want to know all the options they have, and see them in an appropriate environment to judge their appearance — something IKEA provides perfectly.
      </ParaText>
      <Image data-src={Love} />
    </SlideWrapper>
  );
};
