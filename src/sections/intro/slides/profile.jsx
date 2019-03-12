import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';
import Heading from '../../../components/Heading';

import Man from '../../../../static/man.png';
import Woman from '../../../../static/woman.png';
import Genderless from '../../../../static/genderless.png';


const Container = styled.div`
  height: 70vh;

  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 1fr 6fr;
  grid-row-gap: 1em;
  grid-template-areas:
    'heading heading'
    'image text';
`;

const ProfileHeading = styled(Heading)`
  grid-area: heading;
`;

const ProfileDesc = styled.div`
  grid-area: text;
`;

const ProfileImg = styled.img`
  grid-area: image;

  align-self: center;

  max-width: 100%;
  max-height: 100%;
`;

const ProfileLegend = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LegendItem = styled.div`
  display: flex;

  & > span {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: auto 0.5em auto 0;
    border-radius: 50%;
    background-color: ${props => props.theme.colors[props.color] || props.color};
  };
`;


export default () => {
  const { state: { userName, userGender }, dispatch } = useContext(SiteContext);



  return (
    <SlideWrapper>
      <Container>
        <ProfileHeading size='big' weight='700'>{userName}'s Customer Profile</ProfileHeading>
        <ProfileImg src={(userGender === 'male' ? Man : (userGender === 'female' ? Woman : Genderless))} />
        <ProfileDesc>

          <br />

          <Text size='big' inline>
            Currently, {userName} is{' '}
          </Text>
          <Text size='big' color='primary' inline>
            looking to buy a couch{' '}
          </Text>
          <Text size='big' inline>
            since they're moving into a new bachelor's apartment. {userName} is 23 years old, working an entry-level job like most other young adults, and{' '}
          </Text>
          <Text size='big' inline color='red'>has restrictions on the modifications and space{' '}
          </Text>
          <Text size='big' inline>
            in their rented apartment.{' '}
          </Text>
          <br /><br />
          <Text size='big' inline>
            Even so, {userName} really{' '}
          </Text>
          <Text size='big' color='green' inline>
            wants to have furniture that has a mid-century modern design{' '}
          </Text>
          <Text size='big' inline>
            as that's their favourite style, and they{' '}
          </Text>
          <Text size='big' color='green' inline>
            want the furniture to mesh well together.{' '}
          </Text>
          <Text size='big' inline>
            Since they're going to be{' '}
          </Text>
          <Text size='big' color='primary' inline>
            furnishing the rest of the apartment{' '}
          </Text>
          <Text size='big' inline>
            as well, they're open to{' '}
          </Text>
          <Text size='big' color='green' inline>
            shopping for matching items{' '}
          </Text>
          <Text size='big' inline>
            if they come up.{' '}
          </Text>
          <Text size='big' inline>
            However, they have to{' '}
          </Text>
          <Text size='big' color='red' inline>
            stay on a strict budget{' '}
          </Text>
          <Text size='big' inline>
            first and foremost to guarantee they can properly furnish their apartment completely.
          </Text>

          <br />

          <ProfileLegend>
            <LegendItem color='primary'>
              <span />
              <Text size='big' color='primary' inline>
                Jobs
              </Text>
            </LegendItem>
            <LegendItem color='red'>
              <span />
              <Text size='big' color='red' inline>
                Pains
              </Text>
            </LegendItem>
            <LegendItem color='green'>
              <span />
              <Text size='big' color='green' inline>
                Gains
              </Text>
            </LegendItem>
          </ProfileLegend>
        </ProfileDesc>

      </Container>
    </SlideWrapper>
  )
};
