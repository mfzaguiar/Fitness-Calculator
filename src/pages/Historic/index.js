import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';

import Background from '~/components/Background';

import water from '~/assets/icons/water.png';
import calories from '~/assets/icons/calories.png';
import empty from '~/assets/animations/search-empty.json';

import {
  Container,
  Header,
  HeaderTitle,
  HistoricItem,
  StyledText,
  StyledImage,
  WrapperLoading,
} from './styles';

export default function Historic({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleLoadData() {
      try {
        const responseData = await AsyncStorage.getItem('Historic');
        if (responseData !== null) {
          setData(JSON.parse(responseData));
        }
        setLoading(false);
      } catch (error) {
        Alert.alert(error);
        setLoading(false);
      }
    }
    handleLoadData();
  }, []);

  function handleNavigation(item) {
    if (item.type === 'water') {
      navigation.navigate('ResultWater', { ...item });
    } else {
      navigation.navigate('ResultTdee', { ...item });
    }
  }

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

          {loading ? (
            <WrapperLoading>
              <ActivityIndicator size="large" color="#fff" />
            </WrapperLoading>
          ) : (
            <>
              {data.length <= 0 && (
                <WrapperLoading>
                  <Lottie source={empty} autoPlay loop />
                </WrapperLoading>
              )}
              <FlatList
                data={data}
                keyExtractor={item => item.date}
                renderItem={({ item }) => (
                  <HistoricItem onPress={() => handleNavigation(item)}>
                    <StyledImage
                      source={item.type === 'water' ? water : calories}
                    />
                    <StyledText>
                      Data: {new Date().toLocaleDateString()}
                    </StyledText>
                    <Icon name="keyboard-arrow-right" color="#fff" size={30} />
                  </HistoricItem>
                )}
              />
            </>
          )}
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
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
