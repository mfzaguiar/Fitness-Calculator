import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import Lottie from 'lottie-react-native';

import BackgroundTemplate from '~/assets/template/Template.png';
import Kcal from '~/assets/icons/calories.png';
import Book from '~/assets/icons/open-book.png';
import Water from '~/assets/icons/water.png';
import RunMan from '~/assets/animations/runman.json';

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
  },
  cardPhrases: {
    display: 'flex',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 10,
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.76)',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    marginBottom: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.76)',
    borderRadius: 10,
  },
  editedtext: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#fff',
  },
  img: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  HeaderTitle: {
    lineHeight: 30,
    fontSize: 24,
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardAnimation: {
    height: 180,
  },
});

const phrasesData = [
  {
    text:
      'Motivação é o que você precisa para começar. Hábito é o que você precisa para continuar.',
  },
  {
    text: 'A dor que você sente hoje será a sua força amanhã.',
  },
  { text: 'O esforço é grande, mas a recompensa é ainda maior.' },
  { text: 'O corpo alcança o que a mente acredita.' },
  { text: 'Pequenas mudanças podem fazer grandes diferenças.' },
  { text: 'Daqui a um ano, você vai desejar ter começado hoje.' },
  { text: 'Você pode chegar aonde quiser basta ser determinado.' },
  {
    text:
      'Se você não lutar por alguma coisa, será vencido por qualquer coisa.',
  },
  {
    text: 'Bom dia! Levante e vá realizar os seus sonhos!.',
  },
  {
    text: 'Seja sua própria inspiração.',
  },
];

export default function Home({ navigation }) {
  const [phrases, setPhrases] = useState(0);

  useEffect(() => {
    function loadPhrase() {
      setPhrases(Math.floor(Math.random() * phrasesData.length));
    }
    loadPhrase();
  }, [phrases]);

  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundTemplate}>
      <StatusBar barStyle="light-content" backgroundColor="#0b0f1b" />
      <SafeAreaView>
        <View style={styles.cardPhrases}>
          <Text style={styles.HeaderTitle}>{phrasesData[phrases].text}</Text>
        </View>
        <View style={styles.cardAnimation}>
          <Lottie source={RunMan} speed={0.8} loop autoPlay />
        </View>

        <View style={styles.cardWrapper}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Tdee')}
          >
            <Image source={Kcal} />
            <Text style={styles.editedtext}>Calcular TDEE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Water')}
          >
            <Image source={Water} />
            <Text style={styles.editedtext}>Calcular Quantidade Água</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Historic')}
          >
            <Image source={Book} />
            <Text style={styles.editedtext}>Histórico</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
