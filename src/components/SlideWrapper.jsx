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


export default ({ className, children }) => (
  <Container className={`${className || ''} slide`}>
    <div>
      {children}
    </div>
  </Container>
);
