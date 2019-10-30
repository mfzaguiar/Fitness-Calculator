import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/pages/Home';
import Tdee from '~/pages/Tdee';
import Help from '~/pages/Help';
import Result from '~/pages/Result';

const mainNavigation = createStackNavigator(
  {
    Home,
    Tdee,
    Help,
    Result,
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
