import React from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';
import TextGlitch from '../../../components/TextGlitch';


export default () => {

  return (
    <SlideWrapper>
      <TextGlitch text='The Digital Front' size={4} color='black'/>
    </SlideWrapper>
  );
};
