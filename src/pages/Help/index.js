import React from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Background from '~/components/Background';
import { Container, Header, StyledText } from './styles';

export default function Help({ navigation }) {
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
          <StyledText>
            Uma forma mais precisa de calcular seu Gasto energético diário é
            determinar sua taxa metabólica basal(TMB) usando sua altura, peso,
            idade e genero, então multiplicar a taxa metabólica basal(TMB) pelo
            nivel de atividade diária, obtendo então o Gasto energético diário.
            Taxa metabólica basal (TMB) é o número de calorias que seu corpo
            requer para realizar funções corporais normais, não incluindo
            atividade. Estas funções incluem coisas como manter o coração
            batendo, inalar e expirar o ar e processar oxigênio, digerir
            alimentos, produção de novas células sanguíneas, manutenção da
            temperatura corporal e outras processos os processos básicos da
            vida. A TMB pode variar de pessoa para pessoa, dependendo sobre
            fatores genéticos e ambientais. A TMB está no seu nível mais baixo
            enquanto estiver dormindo e aumenta um pouco quando você come para
            digerir os alimentos. Ter uma porcentagem maior de massa magra
            (músculo) também aumenta sua TMB, porque o músculo usa mais energia
            que a gordura.
          </StyledText>
        </Container>
      </Background>
    </SafeAreaView>
  );
}

Help.navigationOptions = () => ({
  header: null,
});
