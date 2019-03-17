import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../../../utils/siteContext';

import SlideWrapper from '../../../components/SlideWrapper';
import Text from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';


const IntroText = styled(Text)`
  text-align: center;
`;

const ProfileInput = styled(TextInput)`
  width: 70%;
  font-size: 1.2em;
`;

const ProfileButton = styled(Button)`
  margin-right: 1em;
`;

export default ({ fullpageApi }) => {

  const { state: { userName }, dispatch } = useContext(SiteContext);

  const updateName = name => dispatch({ type: 'UPDATE_NAME', name });
  const updateGender = gender => {
    dispatch({ type: 'UPDATE_GENDER', gender });
    fullpageApi.moveSlideRight();
  };

  return (
    <SlideWrapper>
      <div>
        <IntroText size='big'>
          Let's start by getting your name:
        </IntroText>
        <br />
        <ProfileInput
          outlineColor="black"
          placeholder="Jordan"
          defaultValue={userName !== 'Our customer' ? userName : ''}
          onChangeHandler={updateName}
        />
      </div>

      <div>
        <IntroText size='big'>
          Hi{userName !== 'Our customer' && ` ${userName}`}! What's your gender?
        </IntroText>
        <br />
        <ProfileButton backgroundColor='primary' fontSize='1.2em' onClickHandler={() => updateGender('male')} label='Male' icon='mars' />
        <ProfileButton backgroundColor='primary' fontSize='1.2em' onClickHandler={() => updateGender('female')} label='Female' icon='venus' />
        <ProfileButton backgroundColor='primary' fontSize='1.2em' onClickHandler={() => updateGender('other')} label='Other' icon='genderless' />
      </div>
    </SlideWrapper>
  );
};
