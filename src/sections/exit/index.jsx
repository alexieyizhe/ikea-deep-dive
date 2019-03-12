import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../../components/PageWrapper';
import Text from '../../components/Text';
import Exit from '../../../static/exit.gif';

const Image = styled.img`
  max-width: 40vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin: auto;
  }
`;

const ParaText = styled(Text)`
  text-align: center;
  display: block;
  margin-top: 1em;
`;
export default () => (
  <PageWrapper>
    <Container>
      <Image data-src={Exit} />
      <ParaText size='3em' weight='bold'>
        I hope you enjoyed your visit to IKEA!
      </ParaText>
      <ParaText size='1.2em' color='grey' weight='bold'>
        This paper/site was created with ❤️ and ☕ by <a href='https://alexieyizhe.me' target='_blank'>Alex Xie</a>.
      </ParaText>
    </Container>
  </PageWrapper>
);
