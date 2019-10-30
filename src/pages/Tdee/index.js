import React, { useState } from 'react';

import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwitchSelector from 'react-native-switch-selector';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {
  Header,
  Container,
  WrapperItems,
  Form,
  CalculateButton,
  FinalIMC,
  TableIMC,
  Separator,
  TextIMC,
  ColorTest,
  Label,
  TextSlider,
  SmallText,
} from './styles';

const Activity = [
  { label: 'Sedentario', value: '0', description: 'pouca atividade' },
  { label: 'Leve', value: '1', description: '1-3 vezes na semana' },
  { label: 'Moderada', value: '2', description: '4-5 vezes na semana' },
  { label: 'Intensa', value: '3', description: '6-7 vezes na semana' },
];

const DataIMC = [
  { text: 'Muito abaixo do preso', color: '#d99795' },
  { text: 'Abaixo do peso', color: '#008bc1' },
  { text: 'Peso normal', color: '#05832d' },
  { text: 'Acima do peso', color: '#ffc000' },
  { text: 'Obesidade I', color: '#ff8100' },
  { text: 'Obesidade II (severa)', color: '#c00000' },
  { text: 'Obesidade III (mórbida)', color: '#ff0033' },
];

export default function Tdee({ navigation }) {
  const [activity, setActivity] = useState(0);
  const [gender, setGender] = useState(0);
  const [result, setResult] = useState('');
  const [height, setHeight] = useState(40);
  const [weight, setWeight] = useState(30);
  const [resultIMC, setResultIMC] = useState('');
  const [resultImcColor, setResultImcColor] = useState('#f8eeb4');

  function handleCalculate() {
    const IMCResult = (weight / ((height / 100) * (height / 100))).toFixed(2);

    if (IMCResult < 17) {
      setResultIMC(DataIMC[0].text);
      setResultImcColor(DataIMC[0].color);
    } else if (IMCResult >= 17 && IMCResult <= 18.49) {
      setResultIMC(DataIMC[1].text);
      setResultImcColor(DataIMC[1].color);
    } else if (IMCResult >= 18.5 && IMCResult <= 24.99) {
      setResultIMC(DataIMC[2].text);
      setResultImcColor(DataIMC[2].color);
    } else if (IMCResult >= 25 && IMCResult <= 29.99) {
      setResultIMC(DataIMC[3].text);
      setResultImcColor(DataIMC[3].color);
    } else if (IMCResult >= 30 && IMCResult <= 34.99) {
      setResultIMC(DataIMC[4].text);
      setResultImcColor(DataIMC[4].color);
    } else if (IMCResult >= 35 && IMCResult <= 39.99) {
      setResultIMC(DataIMC[5].text);
      setResultImcColor(DataIMC[5].color);
    } else if (IMCResult >= 40) {
      setResultIMC(DataIMC[6].text);
      setResultImcColor(DataIMC[6].color);
    }

    setResult(IMCResult);
  }

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
            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
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
                onPress={value => setGender(!value)}
                hasPadding
                options={[
                  { label: 'Masculino', value: true },
                  { label: 'Feminino', value: false },
                ]}
              />
            </WrapperItems>

            <WrapperItems>
              <Label>Altura:</Label>
              <Slider
                style={{ marginTop: 20 }}
                thumbTintColor="#fff"
                minimumValue={40}
                maximumValue={220}
                value={40}
                step={1}
                minimumTrackTintColor="#eee"
                maximumTrackTintColor="#000000"
                onValueChange={value => setHeight(value)}
              />
              <TextSlider>{height} cm</TextSlider>
            </WrapperItems>

            <WrapperItems>
              <Label>Peso:</Label>
              <Slider
                style={{ marginTop: 20 }}
                thumbTintColor="#fff"
                minimumValue={30}
                maximumValue={200}
                value={30}
                step={0.5}
                minimumTrackTintColor="#eee"
                maximumTrackTintColor="#000000"
                onValueChange={value => setWeight(value)}
              />
              <TextSlider>{weight} kg</TextSlider>
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

            <CalculateButton onPress={() => navigation.navigate('Result')}>
              Calcular
            </CalculateButton>
          </Form>
          {!!result && (
            <TableIMC>
              <FinalIMC>{result}</FinalIMC>
              <Separator />
              <ColorTest color={resultImcColor}>
                <TextIMC>{resultIMC}</TextIMC>
              </ColorTest>
            </TableIMC>
          )}
        </Container>
      </Background>
    </SafeAreaView>
  );
}

Tdee.navigationOptions = () => ({
  header: null,
});
