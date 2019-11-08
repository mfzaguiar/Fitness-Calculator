import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SwitchSelector from 'react-native-switch-selector';
import Slider from '@react-native-community/slider';

import Background from '~/components/Background';

import {
  Header,
  Container,
  WrapperItems,
  Form,
  CalculateButton,
  Label,
  TextSlider,
  SmallText,
} from './styles';

const Activity = [
  {
    label: 'Sedentario',
    value: '0',
    description: 'Pouco exercício',
    factor: 1.2,
  },
  {
    label: 'Leve',
    value: '1',
    description: 'Exercício leve, 1/3 vezes na semana',
    factor: 1.375,
  },
  {
    label: 'Moderada',
    value: '2',
    description: 'Exercício moderado, 4/5 vezes na semana',
    factor: 1.55,
  },
  {
    label: 'Ativo',
    value: '3',
    description: 'Exercício pesado, 6/7 vezes na semana',
    factor: 1.725,
  },
  {
    label: 'Intensa',
    value: '4',
    description: 'Exercício pesado, 2x por dia',
    factor: 1.9,
  },
];

export default function Tdee({ navigation }) {
  const [activity, setActivity] = useState(0);
  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(15);
  const [height, setHeight] = useState(130);
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
                  type: 'all',
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
              <Label>Sexo:</Label>
              <SwitchSelector
                style={{ marginTop: 10 }}
                initial={gender}
                textColor="#a5a5a5"
                selectedColor="#fff"
                buttonColor="rgba(0,0,0,0.8)"
                borderColor="#eee"
                onPress={value => setGender(value)}
                hasPadding
                options={[
                  { label: 'Masculino', value: 0 },
                  { label: 'Feminino', value: 1 },
                ]}
              />
            </WrapperItems>

            <WrapperItems>
              <Label>Idade:</Label>
              <TextSlider>{age} anos</TextSlider>
              <Slider
                style={{ marginTop: 20 }}
                thumbTintColor="#fff"
                minimumValue={15}
                maximumValue={75}
                value={5}
                step={1}
                minimumTrackTintColor="#eee"
                maximumTrackTintColor="#000000"
                onValueChange={value => setAge(value)}
              />
            </WrapperItems>

            <WrapperItems>
              <Label>Altura:</Label>
              <TextSlider>{height} cm</TextSlider>
              <Slider
                style={{ marginTop: 20 }}
                thumbTintColor="#fff"
                minimumValue={130}
                maximumValue={220}
                value={40}
                step={1}
                minimumTrackTintColor="#eee"
                maximumTrackTintColor="#000000"
                onValueChange={value => setHeight(value)}
              />
            </WrapperItems>

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

            <WrapperItems>
              <Label>Nivel de Atividade:</Label>
              <SwitchSelector
                style={{ marginTop: 10 }}
                initial={activity}
                textColor="#a5a5a5"
                selectedColor="#fff"
                buttonColor="rgba(0,0,0,0.8)"
                borderColor="#eee"
                onPress={value => setActivity(value)}
                hasPadding
                options={Activity}
              />
              <SmallText>{Activity[activity].description}</SmallText>
            </WrapperItems>

            <CalculateButton
              onPress={() =>
                navigation.navigate('ResultTdee', {
                  gender,
                  age,
                  height,
                  weight,
                  factor: Activity[activity].factor,
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

Tdee.navigationOptions = () => ({
  header: null,
});

Tdee.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
