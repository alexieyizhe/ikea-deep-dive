import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  
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
