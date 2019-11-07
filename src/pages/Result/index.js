import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwitchSelector from 'react-native-switch-selector';
import fitness from '~/assets/animations/fitness-white.json';

import Background from '~/components/Background';
import {
  Container,
  Header,
  Box,
  StyledText,
  SmallText,
  ContainerMacros,
  WrapperMacros,
  WrapperItems,
  Label,
  ImageStyled,
  TitleMacros,
  TipsButton,
} from './styles';

import Rice from '~/assets/icons/rice.png';
import Avocado from '~/assets/icons/avocado.png';
import Steak from '~/assets/icons/steak.png';

export default function Result({ navigation }) {
  const [resultTdee, setResultTdee] = useState('');
  const [resultBmr, setResultBmr] = useState('');
  const [objective, setObjective] = useState(0);

  const [carb, setCarb] = useState([]);
  const [protein, setProtein] = useState([]);
  const [fat, setFat] = useState([]);

  const [loop, setLoop] = useState(true);

  const gender = navigation.getParam('gender');
  const age = navigation.getParam('age');
  const factor = navigation.getParam('factor');
  const height = navigation.getParam('height');
  const weight = navigation.getParam('weight');

  useEffect(() => {
    setInterval(() => {
      setLoop(false);
    }, 1000);

    function handleMacros() {
      if (objective === 0) {
        const newTdee = parseFloat(resultTdee) - 500;

        const Vcarb = [];
        const Vprotein = [];
        const Vfat = [];
        Vcarb.push(
          ((newTdee * 0.2) / 4).toFixed(),
          ((newTdee * 0.35) / 4).toFixed(),
          ((newTdee * 0.5) / 4).toFixed()
        );
        Vprotein.push(
          ((newTdee * 0.4) / 4).toFixed(),
          ((newTdee * 0.35) / 4).toFixed(),
          ((newTdee * 0.3) / 4).toFixed()
        );
        Vfat.push(
          ((newTdee * 0.4) / 9).toFixed(),
          ((newTdee * 0.3) / 9).toFixed(),
          ((newTdee * 0.2) / 9).toFixed()
        );

        setProtein(Vprotein);
        setFat(Vfat);
        setCarb(Vcarb);
      } else if (objective === 1) {
        const newTdee = parseFloat(resultTdee);

        const Vcarb = [];
        const Vprotein = [];
        const Vfat = [];
        Vcarb.push(
          ((newTdee * 0.2) / 4).toFixed(),
          ((newTdee * 0.35) / 4).toFixed(),
          ((newTdee * 0.5) / 4).toFixed()
        );
        Vprotein.push(
          ((newTdee * 0.4) / 4).toFixed(),
          ((newTdee * 0.35) / 4).toFixed(),
          ((newTdee * 0.3) / 4).toFixed()
        );
        Vfat.push(
          ((newTdee * 0.4) / 9).toFixed(),
          ((newTdee * 0.3) / 9).toFixed(),
          ((newTdee * 0.2) / 9).toFixed()
        );

        setProtein(Vprotein);
        setFat(Vfat);
        setCarb(Vcarb);
      } else {
        const newTdee = parseFloat(resultTdee) + 500;
        const Vcarb = [];
        const Vprotein = [];
        const Vfat = [];
        Vcarb.push(
          ((newTdee * 0.2) / 4).toFixed(),
          ((newTdee * 0.35) / 4).toFixed(),
          ((newTdee * 0.5) / 4).toFixed()
        );
        Vprotein.push(
          ((newTdee * 0.4) / 4).toFixed(),
          ((newTdee * 0.35) / 4).toFixed(),
          ((newTdee * 0.3) / 4).toFixed()
        );
        Vfat.push(
          ((newTdee * 0.4) / 9).toFixed(),
          ((newTdee * 0.3) / 9).toFixed(),
          ((newTdee * 0.2) / 9).toFixed()
        );

        setProtein(Vprotein);
        setFat(Vfat);
        setCarb(Vcarb);
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
        {loop ? (
          <Lottie
            source={fitness}
            resizeMode="contain"
            autoPlay
            loop={loop}
            speed={0.8}
          />
        ) : (
          <>
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
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Help', {
                      type: 'bmr',
                    })
                  }
                >
                  <Icon
                    name="info"
                    size={20}
                    style={{ margin: 5 }}
                    color="#fff"
                  />
                </TouchableOpacity>
                <SmallText>BMR</SmallText>
                <StyledText>{resultBmr}</StyledText>
                <SmallText>calorias</SmallText>
              </Box>
              <Box>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Help', {
                      type: 'tdee',
                    })
                  }
                >
                  <Icon
                    name="info"
                    size={20}
                    style={{ margin: 5 }}
                    color="#fff"
                  />
                </TouchableOpacity>
                <SmallText>TDEE</SmallText>
                <StyledText>{resultTdee}</StyledText>
                <SmallText>calorias</SmallText>
              </Box>
            </Container>
            <ContainerMacros>
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
              <WrapperMacros>
                <WrapperItems>
                  <Box>
                    <TitleMacros>Low Carb</TitleMacros>
                    <ImageStyled source={Rice} />
                    <StyledText>Carboidratos</StyledText>
                    <SmallText>{carb[0]} g</SmallText>

                    <ImageStyled source={Steak} />
                    <StyledText>Proteina</StyledText>
                    <SmallText>{protein[0]} g</SmallText>

                    <ImageStyled source={Avocado} />
                    <StyledText>Gordura</StyledText>
                    <SmallText>{fat[0]} g</SmallText>
                  </Box>
                </WrapperItems>
                <WrapperItems>
                  <Box>
                    <TitleMacros>Carb Moderado</TitleMacros>
                    <ImageStyled source={Rice} />
                    <StyledText>Carboidratos</StyledText>
                    <SmallText>{carb[1]} g</SmallText>

                    <ImageStyled source={Steak} />
                    <StyledText>Proteina</StyledText>
                    <SmallText>{protein[1]} g</SmallText>

                    <ImageStyled source={Avocado} />
                    <StyledText>Gordura</StyledText>
                    <SmallText>{fat[1]} g</SmallText>
                  </Box>
                </WrapperItems>
                <WrapperItems>
                  <Box>
                    <TitleMacros>Alto Carb</TitleMacros>
                    <ImageStyled source={Rice} />
                    <StyledText>Carboidratos</StyledText>
                    <SmallText>{carb[2]} g</SmallText>

                    <ImageStyled source={Steak} />
                    <StyledText>Proteina</StyledText>
                    <SmallText>{protein[2]} g</SmallText>

                    <ImageStyled source={Avocado} />
                    <StyledText>Gordura</StyledText>
                    <SmallText>{fat[2]} g</SmallText>
                  </Box>
                </WrapperItems>
              </WrapperMacros>
            </ContainerMacros>
            <TipsButton
              onPress={() =>
                navigation.navigate('Help', {
                  type: 'tips',
                })
              }
            >
              <SmallText>Dicas</SmallText>
              <Icon
                name="forward"
                color="#fff"
                size={18}
                style={{ left: 140 }}
              />
            </TipsButton>
          </>
        )}
      </Background>
    </SafeAreaView>
  );
}

Result.navigationOptions = () => ({
  header: null,
});

Result.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
