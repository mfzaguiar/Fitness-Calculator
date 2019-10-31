import React from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Background from '~/components/Background';
import { Container, Header, Box, StyledText, SmallText } from './styles';

export default function Result({ navigation }) {
  const TMB = navigation.getParam('TMB');
  const TDEE = navigation.getParam('TDEE');

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
        <Container>
          <Box>
            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
              <Icon name="info" size={20} style={{ margin: 5 }} color="#fff" />
            </TouchableOpacity>
            <SmallText>TMB</SmallText>
            <StyledText>{TMB}</StyledText>
            <SmallText>calorias</SmallText>
          </Box>
          <Box>
            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
              <Icon name="info" size={20} style={{ margin: 5 }} color="#fff" />
            </TouchableOpacity>
            <SmallText>TDEE</SmallText>
            <StyledText>{TDEE}</StyledText>
            <SmallText>calorias</SmallText>
          </Box>
        </Container>
      </Background>
    </SafeAreaView>
  );
}

Result.navigationOptions = () => ({
  header: null,
});
