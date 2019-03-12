/*
  GLITCH_TEXT.JS
    Wrapper around text that creates a 'glitch' effect that warps
    the text. Color and font of the text is set by parent component.
*/

import React from 'react';
import styled from 'styled-components';

const GlitchBox = styled.div`
  position: relative;
  color: ${props => props.color};
  font-size: ${props => `${props.size}em`};
  background: white;
  text-shadow: 0 1px #0DFF0F;
  display: inline-block;


  @keyframes glitch-anim-1 {
    0% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    20% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    40% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    60% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    80% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    100% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
  }

  @keyframes force-move {
    from {top: 0px;}
    to {top: 0.01px;}
  }

  @keyframes glitch-anim-2 {
    0% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    22% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    34% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    55% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    78% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
    100% {
      clip: ${props => `rect(${Math.floor(Math.random() * (props.size - (props.size / 2)))}em, 5000px, ${Math.floor(Math.random() * (props.size + 1 - (props.size - 1)) + (props.size - 1))}em, 0)`};
    }
  }

  &:before {
    content: '${props => props.text}';
    position: absolute;
    top: -5px;
    color: ${props => props.color};;
    left: 0;
    width: 100%;
    height: 100%;
    text-shadow: -1px 0 blue;
    /* important: opaque background masks the original */
    background: white;
    animation: glitch-anim-1 1s infinite linear alternate-reverse;
    -webkit-animation: force-move 0.1s infinite; // Some browsers don't re-render for clip-rect, so we force it
  }

  &:after {
    content: '${props => props.text}';
    position: absolute;
    top: 5px;
    color: ${props => props.color};;
    left: 0;
    width: 100%;
    height: 100%;
    text-shadow: 1px 0 red;

    /* important: opaque background masks the original */
    background: white;
    animation: glitch-anim-2 1.1s infinite linear alternate-reverse;
  }

`;

const Glitch = props => (
  <GlitchBox {...props}>
    {props.text}
  </GlitchBox>
);

export default Glitch;
