import styled from "styled-components";


const Text = styled.span`
  display: inline-block;

  color: ${props =>
    props.theme.colors[props.color] || props.color || props.theme.colors.lightBlack};
  font-size: ${props => props.theme.sizes.bodyText[props.size] || props.size || props.theme.sizes.bodyText.normal};
  font-weight: ${props => props.theme.app.font.weight[props.weight] || props.theme.app.font.weight.normal};
`;

export default Text;
