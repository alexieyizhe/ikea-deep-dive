import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
  cursor: pointer;
  padding: ${props => props.theme.app.container.padding};
  border: none;
  border-radius: ${props => props.theme.app.border.radius};

  font-size: ${props => props.fontSize};
  color: ${props => props.theme.colors[props.color] || props.color || 'black'};
  border: 3px solid ${props => props.theme.colors[props.color] || props.color || 'black'};

  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  // remove annoying blue Chrome outline when focused
  &:focus {
    outline: none;
  }
`;


const ButtonIcon = styled(FontAwesomeIcon)`
  padding-left: ${props => props.left ? '0' : '1em'};
  padding-right: ${props => props.right ? '0' : '1em'};
`;

export default ({
  className,
  label,
  icon,
  iconRight,
  disabled,
  fontSize,
  color = "black",
  backgroundColor = "white",
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
    fontSize={fontSize}
  >
    {icon && !iconRight && <ButtonIcon left icon={icon} size='1x' />}
    {label && ` ${label}`}
    {icon && iconRight && <ButtonIcon right icon={icon} size='1x' />}
  </Button>
);
