import React from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Background from '~/components/Background';
import {
  Container,
  Header,
  Title,
  SubTitle,
  StyledText,
  ListText,
} from './styles';

export default function Help({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              size={28}
              style={{ margin: 10 }}
              color="#fff"
            />
          </TouchableOpacity>
        </Header>
        <Container>
          <Title>O que é TDEE ?</Title>
          <StyledText>
            Total Daily Energy Expenditure(TDEE) significa Gasto energético
            diário. É o número total de calorias que você queima durante o dia.
            Seu TDEE é determinado por quatro fatores principais:
          </StyledText>
          <ListText>- Taxa metabólica basal</ListText>
          <ListText>- Efeito Térmico dos Alimentos</ListText>
          <ListText>- Atividade termogênica sem exercício</ListText>
          <ListText>- Efeito Térmico da Atividade (Exercício)</ListText>
          <SubTitle>Taxa metabólica basal (BMR)</SubTitle>
          <StyledText>
            A taxa metabólica basal refere-se ao número de calorias que seu
            corpo queima todos os dias para mantê-lo vivo. A BMR não inclui
            atividade física, processo de digestão ou coisas como caminhar de
            uma sala para outra. Basicamente, BMR é o número de calorias que seu
            corpo gastaria em um período de 24 horas se tudo o que você fez foi
            ficar deitado na cama o dia inteiro. Este é o mínimo absoluto de
            calorias necessárias para garantir sua sobrevivência.
          </StyledText>
          <SubTitle>Efeito Térmico dos Alimentos</SubTitle>
          <StyledText>
            Quando comemos alimentos, nosso corpo deve gastar energia para
            digerir os alimentos que ingerimos. Esse gasto de energia é
            conhecido como Efeito Térmico dos Alimentos e envolve a decomposição
            de proteínas, carboidratos e gorduras que você consome nos
            aminoácidos individuais, açúcares e ácidos graxos que são então
            absorvidos e usados pelo corpo para transportar todos os seus
            processos.
          </StyledText>
          <SubTitle>Atividade termogênica sem exercício</SubTitle>
          <StyledText>
            A termogênese das atividades não relacionadas ao exercício (NEAT)
            constitui o número de calorias gastas durante o movimento diário que
            não é classificado como exercício estruturado. O NEAT inclui
            atividades como passear com o cachorro, mudar de um cômodo para
            outro ou subir as escadas do seu escritório.
          </StyledText>
          <SubTitle>Efeito Térmico da Atividade</SubTitle>
          <StyledText>
            Efeito Térmico da Atividade é o número de calorias queimadas como
            resultado do exercício (ou seja, cardio em estado estacionário,
            treinamento de resistência, HIIT, sprints, CrossFit, etc.).
            Semelhante ao NEAT, o efeito térmico do exercício é altamente
            variável de uma pessoa para outra ou mesmo de um dia para outro para
            a mesma pessoa, pois a intensidade do treinamento, a duração do
            treino e a frequência do treinamento afetam seu efeito térmico
            semanal da atividade.
          </StyledText>
          <Title>Referência</Title>
          <StyledText>
            Artigo - What is My TDEE (Total Daily Energy Expenditure) Site:
            www.steelfitusa.com
          </StyledText>
          <StyledText>
            Tappy, L. (1996). Thermic effect of food and sympathetic nervous
            system activity in humans. Reproduction, Nutrition, Development,
            36(4), 391–397. http://www.ncbi.nlm.nih.gov/pubmed/8878356/
          </StyledText>
        </Container>
      </Background>
    </SafeAreaView>
  );
}

Help.navigationOptions = () => ({
  header: null,
});
