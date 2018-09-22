import React from 'react';
import ActionMenu from './ActionMenu';
import ActionContent from './ActionContent';
import { Provider } from './Context';

export default () => (
  <Provider>
    <ActionMenu />
    <ActionContent />
  </Provider>
);
