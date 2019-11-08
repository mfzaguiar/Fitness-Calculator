import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Alert } from 'react-native';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Background from '~/components/Background';
import WaterAnimation from '~/assets/animations/water-white.json';

import { Container, Header, WrapperItems, Title, StyledText } from './styles';

import { handleStore } from '~/helpers/storeHistoric';

export default function ResultWater({ navigation }) {
  const [water, setWater] = useState(0);
  const weight = navigation.getParam('weight');

  useEffect(() => {
    function calculateWater() {
      setWater(weight * 2.205 * 0.75 * 28);
    }
    calculateWater();
  }, [weight]);

  async function handleSave() {
    const item = {
      type: 'water',
      weight,
      date: new Date(),
    };

    Alert.alert(
      'Salvar Resultado',
      'Deseja salvar ?',
      [
        { text: 'Cancelar' },
        {
          text: 'Sim',
          onPress: () => {
            handleStore(item);
            navigation.navigate('Home');
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              size={28}
              style={{ margin: 10 }}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleSave();
            }}
          >
            <Icon name="save" size={28} style={{ margin: 10 }} color="#fff" />
          </TouchableOpacity>
        </Header>
        <Container>
          <Lottie
            source={WaterAnimation}
            style={{ height: 200 }}
            autoPlay
            loop
          />
          <WrapperItems>
            <Title>Você deve consumir aproximadamente</Title>
            <StyledText>
              {((Math.round(water / 50) * 50) / 1000).toFixed(3)} ml
            </StyledText>
          </WrapperItems>
        </Container>
      </Background>
    </SafeAreaView>
  );
}

ResultWater.navigationOptions = {
  header: null,
};

ResultWater.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
