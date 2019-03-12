import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';

const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => props.right ?
    `6fr 4fr`
    :
    `4fr 6fr`
  };
  grid-column-gap: 2em;
  grid-template-rows: 1fr 6fr;
  grid-row-gap: 1em;
  grid-template-areas: ${props => props.right ?
    `'${props.hasTitle ? 'title' : 'contents'} image'
    'contents image'`
    :
    `'image ${props.hasTitle ? 'title' : 'contents'}'
    'image contents'`
  };

  justify-content: center;
  align-items: center;

  text-align: ${props => props.right ? 'right' : 'left'};
`;

const DisplayImg = styled.img`
  grid-area: image;

  align-self: center;

  max-width: 100%;
  max-height: 100%;
`;

const DisplayHeading = styled(Heading)`
  grid-area: title;
`;


const Contents = styled.div`
  grid-area: contents;
`;

export default ({ img, title, children, right }) => (
  <Container hasTitle={title !== undefined} right={right}>
    <DisplayImg data-src={img} />
    <DisplayHeading size='big' weight='700'>{title}</DisplayHeading>
    <Contents>
      {children}
    </Contents>
  </Container>
);
