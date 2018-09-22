import React, { Component } from 'react';
import styled from 'styled-components';

const buttonSize = 56;
const smallIndex = 1.6;

const Button = styled.div`
  width: ${props => (props.small ? buttonSize / smallIndex : buttonSize)}px;
  height: ${props => (props.small ? buttonSize / smallIndex : buttonSize)}px;
  border: 2px solid rgba(255, 165, 0, ${props => (props.active ? 1 : 0.6)});
  background: rgba(255, 165, 0, ${props => (props.active ? 1 : 0.6)});
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  color: #fff;
  line-height: ${props =>
    props.small ? buttonSize / smallIndex : buttonSize}px;
  font-size: ${props => (props.small ? buttonSize / smallIndex : buttonSize)}px;
  float: ${props => props.align || 'none'};
  transition: all 0.3s ease;
`;

class RoundButton extends Component {
  render() {
    const { iconName, ...props } = this.props;
    const TagName = iconName;

    return (
      <Button {...props}>
        <TagName />
      </Button>
    );
  }
}

export default RoundButton;
