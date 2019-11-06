import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Background from '~/components/Background';
import WaterAnimation from '~/assets/animations/water.json';

import { Container, Header, WrapperItems, Title, StyledText } from './styles';

export default function ResultWater({ navigation }) {
  const [water, setWater] = useState(0);
  const weight = navigation.getParam('weight');

  useEffect(() => {
    function calculateWater() {
      setWater(weight * 2.205 * 0.75 * 28);
    }
    calculateWater();
  }, [weight]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate('Water')}>
            <Icon
              name="arrow-back"
              size={28}
              style={{ margin: 10 }}
              color="#fff"
            />
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
            <Title>Você deve consumir diariamente</Title>
            <StyledText>{water.toFixed() / 1000} ml</StyledText>
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
  }).isRequired,
};