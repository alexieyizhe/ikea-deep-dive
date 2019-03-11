import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  & .fp-tableCell {
    display: flex;

    & > * {
      margin: auto;
    }
  }
`;

const InnerContents = styled.div`
  width: 80vw;
  margin: auto;
`;


export default ({ className, children }) => (
  <Container className={`${className || ''} slide`}>
    <InnerContents>
      {children}
    </InnerContents>
  </Container>
);
