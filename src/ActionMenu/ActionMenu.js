import React from 'react';
import Context from './Context';
import styled from 'styled-components';
import RoundButton from '../shared/RoundButton';
import Logo from '../shared/Logo';
import { MdRemoveRedEye, MdPlayCircleOutline } from 'react-icons/md';
import MenuItem from './MenuItem';
import { MENU_IDS } from './constants';

export const menuData = [
  {
    icon: MdPlayCircleOutline,
    title: 'Promo',
    id: MENU_IDS.promoVideo,
  },
  {
    icon: MdPlayCircleOutline,
    title: 'Customer Story',
    id: MENU_IDS.customerVideo,
  },
  {
    icon: MdRemoveRedEye,
    title: 'About Us',
    id: MENU_IDS.aboutText,
  },
];

const Menu = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
`;

const Trigger = styled.div`
  transform: rotate(${({ toggled }) => (toggled ? '20' : '0')}deg);
  transition: transform 0.2s ease;
`;

const ActionMenu = () => (
  <Context.Consumer>
    {({ state, handleToggle, handleContent }) => (
      <Menu>
        {menuData.map((item, index) => (
          <MenuItem
            toggled={state.toggled}
            key={index}
            index={menuData.length - index}
            onClick={() => handleContent(item.id)}
            trigger={
              <RoundButton
                align={'right'}
                small
                iconName={item.icon}
                title={item.title}
                active={state.activeContent === item.id}
              />
            }
            content={item.content}
          />
        ))}

        <Trigger toggled={state.toggled}>
          <RoundButton onClick={handleToggle} iconName={Logo} />
        </Trigger>
      </Menu>
    )}
  </Context.Consumer>
);

export default ActionMenu;
