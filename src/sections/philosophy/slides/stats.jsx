import React from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';
import { statCounters } from '../../../utils/siteData';

import StatCounter from '../../../components/StatCounter';
import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';
import Text from '../../../components/Text';


const StatCounterContainer = styled.div`
  display: inline-block;
  grid-area: ${props => props.gridArea};
  align-self: center;
  color: ${props => props.color};

  margin: 0 5em 2em 0;

  &:before {
    content: '${props => props.prefix}';
    font-weight: 500;
    width: 50%;
    display: block;
    margin-bottom: 1vw;
    font-size: 1.3vw;
  }
`;
export default () => {

  return (
    <SlideWrapper>
      <Heading size='3em' weight='bold'>
        By The Numbers 🍃
      </Heading>
      {statCounters.map(counter => (
        <StatCounterContainer
          gridArea={counter.gridArea}
          prefix={counter.textAbove}
          color={counter.color}
          key={counter.subtitle}
        >
          <StatCounter
            countStart={counter.start}
            countEnd={counter.end}
            countDuration={3}
            size="5vw"
            suffix={counter.suffix}
          >
            <span>{counter.subtitle}</span>
          </StatCounter>
        </StatCounterContainer>
      ))}
    </SlideWrapper>
  );
};
