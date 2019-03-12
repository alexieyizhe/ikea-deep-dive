import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';

import Heading from '../../components/Heading';
import LogoAnimation from '../../../static/ikea_logo_anim.gif';

const Container = styled.div`
  width: 75vw;
  margin: -25vw auto;

  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  margin: auto;
`;

const HeroHeading = styled(Heading)`
  transition: opacity 500ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};

  margin: 0 auto;
`;

export default () => {
  const [ showSub, updateShowSub ] = useState(false);

  useEffect(() => {
    const subTimer = setTimeout(() => updateShowSub(true), 4000);

    return () => clearTimeout(subTimer);
  })

  return (
    <PageWrapper>
      <Container>
        <Img data-src={LogoAnimation} />
        <HeroHeading size='big' weight='700' color='primary' show={showSub}>A Customer Experience Journey</HeroHeading>
        <HeroHeading weight='700' color='secondary' show={showSub}>Alex Xie</HeroHeading>
      </Container>
    </PageWrapper>
  )
};
