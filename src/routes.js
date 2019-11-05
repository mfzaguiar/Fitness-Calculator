import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/pages/Home';
import Tdee from '~/pages/Tdee';
import Help from '~/pages/Help';
import Result from '~/pages/Result';
import Historic from '~/pages/Historic';
import Water from '~/pages/Water';

const mainNavigation = createStackNavigator(
  {
    Home,
    Tdee,
    Help,
    Result,
    Historic,
    Water,
  },
  {
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
    },
  }
);

export default createAppContainer(mainNavigation);
