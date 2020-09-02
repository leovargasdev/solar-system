import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Welcome from '../pages/Welcome';
import BottomTabNavigator from './app.routes';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Root" component={BottomTabNavigator} />
  </Stack.Navigator>
);

export default Routes;