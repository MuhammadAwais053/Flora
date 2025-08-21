import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import Flora from './Flora';
import { name as appName } from './app.json';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Root = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Flora />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => Root);
