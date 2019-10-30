import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Background from '~/components/Background';
import { Header } from './styles';

export default function Result({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate('Tdee')}>
            <Icon
              name="arrow-back"
              size={28}
              style={{ margin: 10 }}
              color="#fff"
            />
          </TouchableOpacity>
        </Header>
        <Text style={{ color: '#fff' }}>Olá RESULTADO 123</Text>
      </Background>
    </SafeAreaView>
  );
}

Result.navigationOptions = () => ({
  header: null,
});
