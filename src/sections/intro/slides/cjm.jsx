import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';

const MapContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  overflow: scroll;
`;

export default () => {
  const { state: { userName } } = useContext(SiteContext);

  return (
    <SlideWrapper>
      <Heading size='big' weight='700'>{`${userName}'s Customer Profile`}</Heading>
      <MapContainer>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
        <div>thing</div>
      </MapContainer>
    </SlideWrapper>
  );
};
