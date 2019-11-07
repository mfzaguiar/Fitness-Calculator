import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import water from '~/assets/icons/water.png';
import calories from '~/assets/icons/calories.png';

import {
  Container,
  Header,
  HeaderTitle,
  HistoricItem,
  StyledText,
  StyledImage,
} from './styles';

const data = [
  {
    type: 'water',
    date: new Date(),
  },
  {
    type: 'tdee',
    date: new Date(),
  },
  {
    type: 'water',
    date: new Date(),
  },
];

export default function Historic({ navigation }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function handleLoadData() {
  //     try {
  //       const responseData = await AsyncStorage.getItem('@MyAppCalc');
  //       if (responseData !== null) {
  //         console.log(responseData);
  //       }
  //     } catch (error) {}
  //   }
  //   handleLoadData();
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <Container>
          <Header>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="arrow-back"
                size={28}
                style={{ margin: 10 }}
                color="#fff"
              />
            </TouchableOpacity>
            <HeaderTitle>Histórico</HeaderTitle>
          </Header>

          <FlatList
            data={data}
            keyExtractor={item => String(item.date)}
            renderItem={({ item }) => (
              <HistoricItem>
                <StyledImage
                  source={item.type === 'water' ? water : calories}
                />
                <StyledText>Data: {new Date().toLocaleDateString()}</StyledText>
                <Icon name="keyboard-arrow-right" color="#fff" size={30} />
              </HistoricItem>
            )}
          />
        </Container>
      </Background>
    </SafeAreaView>
  );
}

Historic.navigationOptions = {
  header: null,
};

Historic.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
