import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteContext from '../../../utils/siteContext';
import { cjmData } from '../../../utils/siteData';

import SlideWrapper from '../../../components/SlideWrapper';
import Heading from '../../../components/Heading';
import Button from '../../../components/Button';

const MapContainer = styled.div`
  width: 80vw;
  height: 60vh;
  margin: 2em 0 auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  overflow: scroll;

`;

const Phase = styled.div`
  width: 30vw;

  transition: opacity 250ms ease-in-out;
  &.oneHovered {
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
  }
`;

const EventContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-around;


`;

const Event = styled.div`
  cursor: pointer;
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  background-color: ${props => props.color || props.theme.colors.secondary};

  transform: translateY(${props => `${70 - props.happiness}vh`});

  transition: opacity 250ms ease-in-out, transform 500ms ease-in-out;
  &.oneHovered {
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
  }
`;


const PhaseContents = styled.div`
  padding: 0.5em;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
  grid-template-areas:
    'title title'
    'touchpoints touchpoints'
    'channels channels';

  & > span > ul {
    padding: 0;
    margin: 0 0 0 1em;
  }

`;


const ToggleContainer = styled.div`
  height: 3em;
  display: flex;

  & > * {
    margin: auto;
  }
`;


const popupContentStyle = {
  border: 'none'
};

const popupArrowStyle = {
  display: 'none'
}

export default () => {
  const { state: { userName } } = useContext(SiteContext);

  const [ showBest, toggleShowBest ] = useState(true);
  const [ hovering, toggleHovering ] = useState(false);

  return (
    <SlideWrapper>
      <Heading size='big' weight='700'>{`${userName}'s Customer Journey Map`}</Heading>
      <MapContainer>
        {cjmData.map(phase => (
          <Phase className={`phase ${hovering ? 'oneHovered' : ''}`}>
            <Heading size='small' weight='700'>{phase.title}</Heading>
            <EventContainer>
              {phase.events.map(event => (
                <div
                  onMouseEnter={() => toggleHovering(true)}
                  onMouseLeave={() => toggleHovering(false)}
                >
                  <Popup
                    trigger={
                      <Event
                        className={`event ${hovering ? 'oneHovered' : ''}`}
                        happiness={event.happiness || (showBest ? event.best.happiness : event.worst.happiness)}
                        color={event.color || (showBest ? event.best.color : event.worst.color)}

                      />
                    }
                    position={(event.happiness || (showBest ? event.best.happiness : event.worst.happiness) > 40) ? 'bottom' : 'left bottom'}
                    contentStyle={popupContentStyle}
                    arrowStyle={popupArrowStyle}
                    on="hover"
                  >
                    <PhaseContents>
                      <span className='title' style={{gridArea: 'title'}}>
                        <Heading size='1.1em' weight='bold'>
                          {event.title}
                        </Heading>
                      </span>

                      <span style={{gridArea: 'touchpoints'}}>
                        {event.touchpoints.map(item => (
                          <div>
                            <FontAwesomeIcon icon='hands-helping' size='xs' />
                            <span style={{paddingLeft: '0.5em'}}>{item}</span>
                          </div>
                        ))}
                      </span>

                      <span style={{gridArea: 'channels'}}>
                        {event.channels.map(item => (
                          <FontAwesomeIcon icon={item} size='lg' />
                        ))}
                      </span>

                    </PhaseContents>
                  </Popup>
                </div>

              ))}
            </EventContainer>

          </Phase>
        ))}
      </MapContainer>
      <ToggleContainer>
        <Button backgroundColor='secondary' onClickHandler={() => toggleShowBest(prev => !prev)} label={showBest ? 'Show Worst Case' : 'Show Best Case'} />

      </ToggleContainer>
    </SlideWrapper>
  );
};
