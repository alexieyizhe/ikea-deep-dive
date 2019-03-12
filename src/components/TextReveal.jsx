import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.span`
  display: inline-grid;
  cursor: ${props => props.revealed ? 'auto' : 'pointer'};
  max-width: ${props => props.revealed ? '15em' : '1em'};
  transition: max-width 450ms ease-in-out;
`;

const Contents = styled.span`
  grid-column: 1;
  grid-row: 1;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 350ms ease-in-out;
`;


export default ({ label, reveal }) => {
  const [ revealed, updateRevealed ] = useState(false);

  return (
    <Container
      onMouseEnter={() => updateRevealed(true)}
      revealed={revealed}
    >
      <Contents show={!revealed}>
        {label}
      </Contents>
      <Contents show={revealed}>
        {reveal}
      </Contents>
    </Container>
  );
};
