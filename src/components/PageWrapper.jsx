import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: ${props => props.theme.colors[props.backgroundColor] || props.backgroundColor};

  & .fp-tableCell {
    display: flex;

    & > * {
      margin: auto;
    }
  }

  & .fp-slidesNav {
    display: flex;

    &  ul {
      margin: auto;
    }
  }
`;


export default ({ className, backgroundColor, children }) => (
  <Container className={`${className || ''} section`} backgroundColor={backgroundColor}>
    <div>
      {children}
    </div>
  </Container>
);
