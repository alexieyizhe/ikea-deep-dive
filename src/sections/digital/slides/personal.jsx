import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';
import TextReveal from '../../../components/TextReveal';

const ParaText = styled(Text)`
  position: relative;
  color: rgb(0, 0, 0);

  & a {
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
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
        In the past, IKEA has been especially resistant to adopting a larger dependency on sales through an online medium. As it rose to prominence in the pre-Internet era, it has focused a lot of its processes and strategies into acquiring customers in person. Even currently, its main online channel (<a href='https://ikea.com'>ikea.com</a>) has stayed true to their Scandanavian roots, with a minimalistic and functional appearance.
      </ParaText>
      <ParaText size='1.2em' weight='bold'>
        Now, as more and more companies are realizing the power of digital channels in engaging with customers, IKEA has pushed to increase its touchpoints in online mediums. Apart from the obvious touchpoint where someone like <ColorText color='primary'>{userName}</ColorText> can browse for couches that catch their eye online, IKEA now has online customer support through social media. Speaking of social media, IKEA has found a perfect outlet for their professionally decorated rooms through Instagram as a touchpoint with those looking for aesthetically pleasing design inspiration. It's a perfect marriage that has resulted in IKEA gaining <ColorText color='green'>1.7+ million Instagram followers</ColorText> on their single largest USA account as of writing.
      </ParaText>
      <ParaText size='1.2em' weight='bold'>
        Additionally, IKEA has experimented with providing some of their optional services online as a way to increase convenience. Most online customers are usually looking to accomplish a predefined goal in a <i>convenient</i> manner, and streamlining their access to the goal is priority number one. It's why IKEA offers online ordering for pickup at a collection point, an online design planner, and why they acquired TaskRabbit to provide assembly services for an alternative audience that prefers not to assemble their own furniture (at the cost of savings).
      </ParaText>
    </SlideWrapper>
  );
};
