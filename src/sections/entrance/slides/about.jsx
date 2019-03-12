import React from 'react';
import { historyData } from '../../../utils/siteData';

import SlideWrapper from '../../../components/SlideWrapper';
import Display from '../../../components/Display';
import Text from '../../../components/Text';

import History from '../../../../static/history.jpg';

export default () => (
  <SlideWrapper>
    <Display img={History} right>
      {historyData.map(p => (
        <Text size='big'>
          {p}
        </Text>
      ))}
    </Display>
  </SlideWrapper>
);
