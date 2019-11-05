import React from 'react';
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

import BackgroundTemplate from '~/assets/template/bg-final.png';
import Background from '~/components/Background';
import Kcal from '~/assets/icons/calories.png';
import Book from '~/assets/icons/open-book.png';
import Water from '~/assets/icons/water.png';

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    marginTop: 100,
  },
  cardPhrases: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
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
    lineHeight: 45,
    fontSize: 26,
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const phrases = [
  { text: 'Do something today that your future self will thank you for.' },
  {
    text: 'The pain you fell today will be de the strenght you fell tomorrow.',
  },
  { text: 'Don`t limit your challenges, challenge your limits.' },
];

export default function Home({ navigation }) {
  return (
    <Background>
      <ImageBackground
        style={{ flex: 1, display: 'flex' }}
        source={BackgroundTemplate}
      >
        <SafeAreaView>
          <StatusBar barStyle="light-content" backgroundColor="#0b0f1b" />
          <View style={styles.cardPhrases}>
            <Text style={styles.HeaderTitle}>{phrases[0].text}</Text>
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
