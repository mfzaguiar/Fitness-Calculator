import AsyncStorage from '@react-native-community/async-storage';

async function handleStore(item) {
  const historic = await AsyncStorage.getItem('Historic');
  const data = historic ? JSON.parse(historic) : [];
  AsyncStorage.setItem('Historic', JSON.stringify([item, ...data]));
}

export { handleStore };
