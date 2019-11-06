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

import BackgroundTemplate from '~/assets/template/Template.png';
import Background from '~/components/Background';
import Kcal from '~/assets/icons/calories.png';
import Book from '~/assets/icons/open-book.png';
import Water from '~/assets/icons/water.png';

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    marginTop: 200,
  },
  cardPhrases: {
    display: 'flex',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 10,
    height: 165,
    backgroundColor: 'rgba(255,255,255,0.3)',
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
    fontSize: 26,
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const phrasesData = [
  { text: 'Do something today that your future self will thank you for.' },
  {
    text: 'The pain you fell today will be de the strenght you fell tomorrow.',
  },
  { text: 'Don`t limit your challenges, challenge your limits.' },
  { text: 'Don`t limit your challenges, challenge your limits.' },
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
    <Background>
      <ImageBackground style={{ flex: 1 }} source={BackgroundTemplate}>
        <StatusBar barStyle="light-content" backgroundColor="#0b0f1b" />
        <SafeAreaView>
          <View style={styles.cardPhrases}>
            <Text style={styles.HeaderTitle}>{phrasesData[phrases].text}</Text>
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
    </Background>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
