import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteContext from '../utils/siteContext';


const Container = styled.div`
  transition: background 600ms ease-in-out;
  background: ${props => props.theme.colors[props.color] || props.color || 'white'};
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;


export default () => {

  const { state: { bgColor } } = useContext(SiteContext);

  return <Container color={bgColor} />;
}
