import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Background from '~/components/Background';
// import { Container } from './styles';

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
  },
  card: {
    height: 70,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  editedtext: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#f8eeb4',
    marginRight: 10,
  },
});

export default function Home({ navigation }) {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#3A3636" />
      <View style={styles.cardWrapper}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('IMC')}
        >
          <Text style={styles.editedtext}>Calcular IMC</Text>
          <Icon name="chevron-circle-right" size={24} color="#f8eeb4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.editedtext}>Calcular Tdee</Text>
          <Icon name="chevron-circle-right" size={24} color="#f8eeb4" />
        </TouchableOpacity>
      </View>
    </Background>
  );
}

// Dashboard.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ tintColor }) => (
//     <Icon name="event" size={20} color={tintColor} />
//   ),
// };
