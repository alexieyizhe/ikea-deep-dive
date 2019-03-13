import React from 'react';
import styled from 'styled-components';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

const IntroText = styled(Text)`
  text-align: justify;
  line-height: 1.5;

  & u {
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;

const IntroButton = styled.div`
  display: flex;
  height: 5em;

  & > * {
    margin: auto;
  }
`;

export default ({ fullpageApi }) => (
  <SlideWrapper>
    <IntroText size='2em' weight='bold'>
      My aim with this interactive paper is to explore the nuances of IKEA's operating model through the experience of a customer.
    </IntroText>
    <IntroText size='2em' weight='bold'>
      The paper will cover the three main aspects of IKEA's operations: their <u onClick={() => fullpageApi.moveTo(4)}>physical stores</u>, their <u onClick={() => fullpageApi.moveTo(5)}>online presence</u>, and their <u onClick={() => fullpageApi.moveTo(6)}>philosophy</u> that's enabled them to become the phenomenal furniture store it is today. Afterwards, we'll delve into the <u onClick={() => fullpageApi.moveTo(7)}>improvements</u> that can be made to the IKEA experience.
    </IntroText>
    <IntroButton>
      <Button label='Get Started' backgroundColor='primary' icon='arrow-right' iconRight fontSize='1.4em' onClickHandler={() => fullpageApi.moveSlideRight()} />

    </IntroButton>
  </SlideWrapper>
);
