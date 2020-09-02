import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Theme from '../styles/theme/default';
import Home from '../pages/Home';
import Planet from '../pages/Planet';
import Search from '../pages/Search';
import Saved from '../pages/Saved';
import Gallery from '../pages/Gallery';

const BottomTab = createBottomTabNavigator();

const IconTab = (props: { name: string; color: string }) => <Feather size={24} {...props} />;

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Search" component={Search} initialParams={{ query: '' }}/>
    <Stack.Screen name="Planet" component={Planet} />
  </Stack.Navigator>
);

const AppRoutes = () => (
  <BottomTab.Navigator
    initialRouteName="HomeTab"
    // screenOptions={{tabBarLabel: ({ focused }) => focused ? true : false}}
    tabBarOptions={{ activeTintColor: Theme.colors.tint}}>
    <BottomTab.Screen
      name="HomeTab"
      component={Home}
      options={{
        tabBarLabel: 'Ínicio',
        tabBarIcon: ({ color }) => <IconTab name="home" color={color} />,
      }}
    />
    <BottomTab.Screen
      name="SearchTab"
      component={SearchNavigator}
      options={{
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ color }) => <IconTab name="search" color={color} />,
      }}
    />
    <BottomTab.Screen
      name="BookmarkTab"
      component={Saved}
      options={{
        tabBarLabel: 'Salvos',
        tabBarIcon: ({ color }) => <IconTab name="bookmark" color={color} />,
      }}
    />
    <BottomTab.Screen
      name="GalleryTab"
      component={Gallery}
      options={{
        tabBarLabel: 'Galeria',
        tabBarIcon: ({ color }) => <IconTab name="image" color={color} />,
      }}
    />
  </BottomTab.Navigator>
);

export default AppRoutes;