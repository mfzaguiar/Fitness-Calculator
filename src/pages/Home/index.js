import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import Background from '~/components/Background';
import Header from '~/assets/headerapp.svg';
import BgButton from '~/assets/bg-Button.jpg';
import BgButton2 from '~/assets/bg-Belly.jpg';

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    marginTop: 10,
  },
  card: {
    height: 150,
    marginBottom: 15,
  },
  editedtext: {
    fontWeight: 'bold',
    fontSize: 28,
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
});

export default function Home({ navigation }) {
  return (
    <Background>
      <SafeAreaView>
        <Header />
        <StatusBar barStyle="light-content" backgroundColor="#0b0f1b" />
        <View style={styles.cardWrapper}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Tdee')}
          >
            <ImageBackground
              style={styles.img}
              imageStyle={{
                borderRadius: 15,
                resizeMode: 'cover',
              }}
              source={BgButton}
            >
              <Text style={styles.editedtext}>Calcular TDEE</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Tdee')}
          >
            <ImageBackground
              style={styles.img}
              imageStyle={{
                borderRadius: 15,
                resizeMode: 'cover',
              }}
              source={BgButton2}
            >
              <Text style={styles.editedtext}>Histórico</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
}
