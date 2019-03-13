import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';
import Heading from '../../../components/Heading';

const IntroHeading = styled(Heading)`
  text-align: center;
  margin: auto;
`;


export default () => {
  const { state: { userName } } = useContext(SiteContext);

  return (
    <SlideWrapper>
      <IntroHeading size='4em'>
        Welcome to IKEA{userName === 'Our customer' ? '' : `, ${userName}`}!
      </IntroHeading>
    </SlideWrapper>
  );
};
