import React, { useContext } from 'react';
import styled from 'styled-components';
import { introData } from '../../../utils/siteData';
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
`;

const ProfileButton = styled(Button)`
  margin-right: 1em;
`;

export default () => {

  const { state: { userName, userGender }, dispatch } = useContext(SiteContext);

  const updateName = name => dispatch({ type: 'UPDATE_NAME', name });
  const updateGender = gender => dispatch({ type: 'UPDATE_GENDER', gender });

  return (
    <SlideWrapper>
      {introData.map(p => (
        <IntroText size='2em'>
          {p}
        </IntroText>
      ))}
      <div>
        <Text size='big'>
          Let's start by getting your name:
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
    </SlideWrapper>
  );
};
