import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
  cursor: pointer;
  padding: ${props => props.theme.app.container.padding};
  border: none;
  border-radius: ${props => props.theme.app.border.radius};

  font-size: 100%;
  color: ${props => props.theme.colors[props.color] || props.color};
  background-color: ${props => props.theme.colors[props.backgroundColor] || props.backgroundColor};
  border-bottom: 5px solid ${props => props.theme.colors[`dark${props.backgroundColor}`] || 'grey'};
	text-shadow: 0px -1px ${props => props.theme.colors[`dark${props.backgroundColor}`] || 'grey'};

  &:active {
    transform: translate(0px,4px);
  	border-bottom: 1px solid ${props => props.theme.colors[`dark${props.backgroundColor}`] || 'grey'};
  }

  // remove annoying blue Chrome outline when focused
  &:focus {
    outline: none;
  }
`;

export default ({
  className,
  label,
  icon,
  disabled,
  color = "white",
  backgroundColor = "black",
  type = "button",
  onClickHandler = () => console.log(`clicked ${label} button`)
}) => (
  <Button
    className={className}
    type={type}
    disabled={disabled}
    color={color}
    backgroundColor={backgroundColor}
    onClick={disabled ? null : onClickHandler}
  >
    {icon && <FontAwesomeIcon icon={icon} size='1x' />}
    {label && ` ${label}`}
  </Button>
);
