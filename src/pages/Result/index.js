import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwitchSelector from 'react-native-switch-selector';

import Background from '~/components/Background';
import {
  Container,
  Header,
  Box,
  StyledText,
  SmallText,
  WrapperMacros,
  Label,
  ImageBg,
} from './styles';

import BgCarbs from '~/assets/bg-Carb.jpg';
import BgProtein from '~/assets/bg-Protein.jpg';
import BgFat from '~/assets/bg-Fat.jpg';

export default function Result({ navigation }) {
  const [resultTdee, setResultTdee] = useState('');
  const [resultBmr, setResultBmr] = useState('');
  const [objective, setObjective] = useState(0);
  const [carb, setCarb] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);

  const gender = navigation.getParam('gender');
  const age = navigation.getParam('age');
  const factor = navigation.getParam('factor');
  const height = navigation.getParam('height');
  const weight = navigation.getParam('weight');

  useEffect(() => {
    function handleMacros() {
      if (objective === 0) {
        const newTdee = resultTdee - resultTdee * 0.15;
        const newFat = weight * 0.67 * 9;
        const newProtein = newTdee * 0.3;
        const newCarb = (newTdee - (newFat + newProtein)) / 4;
        setProtein((newProtein / 4).toFixed());
        setFat((newFat / 9).toFixed());
        setCarb(newCarb.toFixed());
      } else if (objective === 1) {
        const newFat = weight * 0.67 * 9;
        const newProtein = resultTdee * 0.25;
        const newCarb = (resultTdee - (newFat + newProtein)) / 4;
        setProtein((newProtein / 4).toFixed());
        setFat((newFat / 9).toFixed());
        setCarb(newCarb.toFixed());
      } else {
        const newTdee = resultTdee * 1.07;
        const newFat = weight * 0.67 * 9;
        const newProtein = newTdee * 0.25;
        const newCarb = (newTdee - (newFat + newProtein)) / 4;
        setProtein((newProtein / 4).toFixed());
        setFat((newFat / 9).toFixed());
        setCarb(newCarb.toFixed());
      }
    }

    function handleCalculate() {
      if (gender === 0) {
        setResultTdee(
          (
            factor *
            (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age)
          ).toFixed()
        );

        setResultBmr(
          (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age).toFixed()
        );
      } else {
        setResultTdee(
          (
            factor *
            (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age)
          ).toFixed()
        );

        setResultBmr(
          (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age).toFixed()
        );
      }
      handleMacros();
    }
    handleCalculate();
  }, [resultTdee, height, weight, age, factor, gender, objective]);

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
            <StyledText>{resultBmr}</StyledText>
            <SmallText>calorias</SmallText>
          </Box>
          <Box>
            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
              <Icon name="info" size={20} style={{ margin: 5 }} color="#fff" />
            </TouchableOpacity>
            <SmallText>TDEE</SmallText>
            <StyledText>{resultTdee}</StyledText>
            <SmallText>calorias</SmallText>
          </Box>
        </Container>
        <WrapperMacros>
          <Label>Objetivo ?</Label>
          <SwitchSelector
            style={{
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 20,
              marginRight: 20,
            }}
            initial={objective}
            textColor="#a5a5a5"
            selectedColor="#fff"
            buttonColor="rgba(0,0,0,0.8)"
            borderColor="#eee"
            onPress={value => {
              setObjective(value);
            }}
            hasPadding
            options={[
              { label: 'Emagrecer', value: 0 },
              { label: 'Manter', value: 1 },
              { label: 'Ganhar Peso', value: 2 },
            ]}
          />
          <Box>
            <ImageBg
              source={BgCarbs}
              imageStyle={{
                borderRadius: 30,
                opacity: 0.5,
              }}
            >
              <StyledText>Carboidratos</StyledText>
              <SmallText>{carb} g</SmallText>
            </ImageBg>
          </Box>
          <Box>
            <ImageBg
              source={BgProtein}
              imageStyle={{
                borderRadius: 30,
                opacity: 0.5,
              }}
            >
              <StyledText>Proteina</StyledText>
              <SmallText>{protein} g</SmallText>
            </ImageBg>
          </Box>
          <Box>
            <ImageBg
              source={BgFat}
              imageStyle={{
                borderRadius: 30,
                opacity: 0.5,
              }}
            >
              <StyledText>Gordura</StyledText>
              <SmallText>{fat} g</SmallText>
            </ImageBg>
          </Box>
        </WrapperMacros>
      </Background>
    </SafeAreaView>
  );
}

Result.navigationOptions = () => ({
  header: null,
});
