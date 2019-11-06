import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import {
  Container,
  Header,
  Form,
  WrapperItems,
  Label,
  TextSlider,
  CalculateButton,
} from './styles';

export default function Water({ navigation }) {
  const [weight, setWeight] = useState(40);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <Container>
          <Header>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon
                name="arrow-back"
                size={28}
                style={{ margin: 10 }}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Help', {
                  type: 'water',
                })
              }
            >
              <Icon
                name="help-outline"
                size={28}
                style={{ margin: 10 }}
                color="#fff"
              />
            </TouchableOpacity>
          </Header>
          <Form>
            <WrapperItems>
              <Label>Peso:</Label>
              <TextSlider>{weight} kg</TextSlider>
              <Slider
                style={{ marginTop: 20 }}
                thumbTintColor="#fff"
                minimumValue={40}
                maximumValue={200}
                value={30}
                step={0.5}
                minimumTrackTintColor="#eee"
                maximumTrackTintColor="#000000"
                onValueChange={value => setWeight(value)}
              />
            </WrapperItems>
            <CalculateButton
              onPress={() =>
                navigation.navigate('ResultWater', {
                  weight,
                })
              }
            >
              Calcular
            </CalculateButton>
          </Form>
        </Container>
      </Background>
    </SafeAreaView>
  );
}

Water.navigationOptions = () => ({
  header: null,
});

Water.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
