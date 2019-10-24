import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function History() {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#3A3636" />
      <View>
        <Text>Olá historico</Text>
      </View>
    </Background>
  );
}

History.navigationOptions = {
  tabBarLabel: 'Histórico',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="history" size={20} color={tintColor} />
  ),
};
