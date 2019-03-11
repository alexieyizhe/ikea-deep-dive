import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';
import Heading from '../../../components/Heading';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

import Man from '../../../../static/man.png';
import Woman from '../../../../static/woman.png';
import Genderless from '../../../../static/genderless.jpg';


const Container = styled.div`
  height: 45vh;

  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 1fr 4fr;
  grid-row-gap: 2em;
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

  max-width: 100%;
  max-height: 100%;
`;


const ProfileInput = styled(TextInput)`
  width: 70%;
`;

const ProfileButton = styled(Button)`
  margin-right: 1em;
`;


export default () => {
  const { state: { userName, userGender }, dispatch } = useContext(SiteContext);

  const updateName = name => dispatch({ type: 'UPDATE_NAME', name });
  const updateGender = gender => dispatch({ type: 'UPDATE_GENDER', gender });

  console.log(userName, userGender);


  return (
    <SlideWrapper>
      <Container>
        <ProfileHeading size='big' weight='700'>Customer Profile</ProfileHeading>
        <ProfileImg src={(userGender === 'male' ? Man : (userGender === 'female' ? Woman : Genderless))} />
        <ProfileDesc>

          <div>
            <Text size='big'>
              What's your name?
            </Text>
            <br />
            <ProfileInput outlineColor="primary" placeholder="Jordan" defaultValue={userName !== 'Our customer' ? userName : ''} onChangeHandler={updateName} />
          </div>

          <div>
            <Text size='big'>
              Hi{userName !== 'Our customer' && ` ${userName}`}! What's your gender?
            </Text>
            <br />
            <ProfileButton backgroundColor='primary' onClickHandler={() => updateGender('male')} label='Male' icon='mars' />
            <ProfileButton backgroundColor='primary' onClickHandler={() => updateGender('female')} label='Female' icon='venus' />
            <ProfileButton backgroundColor='primary' onClickHandler={() => updateGender('other')} label='Other' icon='genderless' />
          </div>

          <Text size='big'>
            {`Today, ${userName} is looking to buy a couch at IKEA.`}
          </Text>

        </ProfileDesc>

      </Container>
    </SlideWrapper>
  )
};
