import React from 'react';
import { TabNavigator } from 'react-navigation';
import FoundAndLostComponent from './FoundAndLostComponent.js';
import FleauxzanguiComponent from './FleauxzanguiComponent.js';
import TheBannetonsComponent from './TheBannetonsComponent.js';

// Tab Navigator Variables //

export const Tabs = TabNavigator({
    2015: { screen: FoundAndLostComponent },
    2016: { screen: FleauxzanguiComponent },
    2017: { screen: TheBannetonsComponent },
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: 'cornflowerblue',
      inactiveTintColor: 'slategrey',
      inactiveBackgroundColor: 'darkgrey',
      labelStyle: {
        fontFamily: 'Hiragino Sans',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 4
      }
    }
  }
);
