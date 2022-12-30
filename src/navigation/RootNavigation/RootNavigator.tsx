import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, ProfileScreen } from '../../screens';

enum RootNavigationList {
  HOME = 'HOME',
  PROFILE = 'PROFILE',
}

type RootNavigationParams = {
  [RootNavigationList.HOME]: undefined;
  [RootNavigationList.PROFILE]: undefined;
};

const RootStack = createStackNavigator<RootNavigationParams>();

type NavigationStackParams = StackNavigationProp<RootNavigationParams, RootNavigationList.HOME>;

export const RootNavigator = () => {
  const navigation = useNavigation<NavigationStackParams>();

  const navigateToProfile = useCallback(
    () => navigation.navigate(RootNavigationList.PROFILE),
    [navigation],
  );

  const HomeScreenComponent = useCallback(
    () => <HomeScreen navigateToProfile={navigateToProfile} />,
    [navigateToProfile],
  );

  return (
    <RootStack.Navigator>
      <RootStack.Screen name={RootNavigationList.HOME} component={HomeScreenComponent} />
      <RootStack.Screen name={RootNavigationList.PROFILE} component={ProfileScreen} />
    </RootStack.Navigator>
  );
};
