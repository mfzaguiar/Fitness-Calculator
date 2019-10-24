import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

import Background from '~/components/Background';

import {
  Container,
  Form,
  CalculateButton,
  FinalIMC,
  TableIMC,
  Separator,
  TextIMC,
  ColorTest,
  Label,
  TextSlider,
} from './styles';

const DataIMC = [
  { text: 'Muito abaixo do preso', color: '#d99795' },
  { text: 'Abaixo do peso', color: '#008bc1' },
  { text: 'Peso normal', color: '#05832d' },
  { text: 'Acima do peso', color: '#ffc000' },
  { text: 'Obesidade I', color: '#ff8100' },
  { text: 'Obesidade II (severa)', color: '#c00000' },
  { text: 'Obesidade III (mórbida)', color: '#ff0033' },
];

export default function IMC() {
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
    <Background>
      <Container>
        <Form>
          {/* <FormInput icon="assignment" placeholder="Digite sua idade" /> */}
          <Label>Altura:</Label>
          <Slider
            style={{ height: 40 }}
            thumbTintColor="#f8eeb4"
            minimumValue={40}
            maximumValue={220}
            value={40}
            step={1}
            minimumTrackTintColor="#eee"
            maximumTrackTintColor="#000000"
            onValueChange={value => setHeight(value)}
          />
          <TextSlider>{height} cm</TextSlider>

          <Label>Peso:</Label>
          <Slider
            style={{ height: 40 }}
            thumbTintColor="#f8eeb4"
            minimumValue={30}
            maximumValue={200}
            value={30}
            step={0.5}
            minimumTrackTintColor="#eee"
            maximumTrackTintColor="#000000"
            onValueChange={value => setWeight(value)}
          />
          <TextSlider>{weight} kg</TextSlider>
          {/* <FormInput
            icon="accessibility"
            placeholder="Digite sua altura em cm"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => weightRef.current.focus()}
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          /> */}
          {/* <FormInput
            icon="timeline"
            placeholder="Digite seu peso em kg"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            ref={weightRef}
            onSubmitEditing={() => handleCalculate()}
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          /> */}
          <CalculateButton onPress={() => handleCalculate()}>
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
  );
}

IMC.navigationOptions = () => ({
  title: 'Calcular IMC',
  headerStyle: {
    headerTransparent: false,
    // backgroundColor: '#3a3636',
  },
});
