import React, { Component } from 'react';
import { clearFix } from '../shared/styleHelper';
import styled from 'styled-components';

const Item = styled.div`
  margin-bottom: 10px;
  transition: transform ease, opacity ease;
  transition-duration: ${props => 0.2 * props.index}s;
  transform: translate3d(0, ${({ toggled }) => (toggled ? '0' : '10px')}, 0);
  opacity: ${({ toggled }) => (toggled ? '1' : '0')};
  ${clearFix()};
`;

class MenuItem extends Component {
  render() {
    const { trigger, ...props } = this.props;

    return (
      <Item {...props}>
        {trigger}
      </Item>
    );
  }
}

export default MenuItem;
