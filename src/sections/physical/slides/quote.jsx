import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';

import Marcus from '../../../../static/marcus.jpg';


const Quote = styled(Text)`
  text-align: justify;
`;

const Emph = styled(Heading)`
  font-style: italic;
`;

const QuoteAuthor = styled(Text)`
  float: right;
  text-align: right;
  padding-top: 4em;
`;

const Image = styled.img`
  max-width: 25em;
  opacity: 0.4;

  filter: grayscale(100%);

  position: absolute;
  top: 50vh;
  right: 10vw;
  z-index: -1;
`;

export default () => {

  const { state: { userName } } = useContext(SiteContext);


  return (
    <SlideWrapper>
      <Quote size='3em' weight='700' color='primary'>
        “[This design] was about finding a way to get people to want to spend more time in the store, not force them. And not just through prices and promotions, but with <i>inspiration</i>. ”
      </Quote>
      <QuoteAuthor size='big' weight={700}>
        {` - Marcus Engman `}
        <br />
        <span style={{ color: 'grey'}}>IKEA Global Chief Designer</span>
      </QuoteAuthor>
      <Image data-src={Marcus} />
    </SlideWrapper>
  );
};
