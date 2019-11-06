import React from 'react';
import PropTypes from 'prop-types';
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

const All = () => {
  return (
    <>
      <Title>O que é TDEE ?</Title>
      <StyledText>
        Total Daily Energy Expenditure(TDEE) significa Gasto energético diário.
        É o número total de calorias que você queima durante o dia. Seu TDEE é
        determinado por quatro fatores principais:
      </StyledText>
      <ListText>- Taxa metabólica basal</ListText>
      <ListText>- Efeito Térmico dos Alimentos</ListText>
      <ListText>- Atividade termogênica sem exercício</ListText>
      <ListText>- Efeito Térmico da Atividade (Exercício)</ListText>
      <SubTitle>Taxa metabólica basal (BMR)</SubTitle>
      <StyledText>
        A taxa metabólica basal refere-se ao número de calorias que seu corpo
        queima todos os dias para mantê-lo vivo. A BMR não inclui atividade
        física, processo de digestão ou coisas como caminhar de uma sala para
        outra. Basicamente, BMR é o número de calorias que seu corpo gastaria em
        um período de 24 horas se tudo o que você fez foi ficar deitado na cama
        o dia inteiro. Este é o mínimo absoluto de calorias necessárias para
        garantir sua sobrevivência.
      </StyledText>
      <SubTitle>Efeito Térmico dos Alimentos</SubTitle>
      <StyledText>
        Quando comemos alimentos, nosso corpo deve gastar energia para digerir
        os alimentos que ingerimos. Esse gasto de energia é conhecido como
        Efeito Térmico dos Alimentos e envolve a decomposição de proteínas,
        carboidratos e gorduras que você consome nos aminoácidos individuais,
        açúcares e ácidos graxos que são então absorvidos e usados pelo corpo
        para transportar todos os seus processos.
      </StyledText>
      <SubTitle>Atividade termogênica sem exercício</SubTitle>
      <StyledText>
        A termogênese das atividades não relacionadas ao exercício (NEAT)
        constitui o número de calorias gastas durante o movimento diário que não
        é classificado como exercício estruturado. O NEAT inclui atividades como
        passear com o cachorro, mudar de um cômodo para outro ou subir as
        escadas do seu escritório.
      </StyledText>
      <SubTitle>Efeito Térmico da Atividade</SubTitle>
      <StyledText>
        Efeito Térmico da Atividade é o número de calorias queimadas como
        resultado do exercício (ou seja, cardio em estado estacionário,
        treinamento de resistência, HIIT, sprints, CrossFit, etc.). Semelhante
        ao NEAT, o efeito térmico do exercício é altamente variável de uma
        pessoa para outra ou mesmo de um dia para outro para a mesma pessoa,
        pois a intensidade do treinamento, a duração do treino e a frequência do
        treinamento afetam seu efeito térmico semanal da atividade.
      </StyledText>
      <Title>Referência</Title>
      <StyledText>
        Artigo - What is My TDEE (Total Daily Energy Expenditure) Site:
        www.steelfitusa.com
      </StyledText>
      <StyledText>
        Tappy, L. (1996). Thermic effect of food and sympathetic nervous system
        activity in humans. Reproduction, Nutrition, Development, 36(4),
        391–397. http://www.ncbi.nlm.nih.gov/pubmed/8878356/
      </StyledText>
    </>
  );
};

const Tdee = () => {
  return (
    <>
      <Title>O que é TDEE ?</Title>
      <StyledText>
        Total Daily Energy Expenditure(TDEE) significa Gasto energético diário.
        É o número total de calorias que você queima durante o dia. Seu TDEE é
        determinado por quatro fatores principais:
      </StyledText>
      <ListText>- Taxa metabólica basal</ListText>
      <ListText>- Efeito Térmico dos Alimentos</ListText>
      <ListText>- Atividade termogênica sem exercício</ListText>
      <ListText>- Efeito Térmico da Atividade (Exercício)</ListText>
      <Title>Referência</Title>
      <StyledText>
        Artigo - What is My TDEE (Total Daily Energy Expenditure) Site:
        www.steelfitusa.com
      </StyledText>
      <StyledText>
        Tappy, L. (1996). Thermic effect of food and sympathetic nervous system
        activity in humans. Reproduction, Nutrition, Development, 36(4),
        391–397. http://www.ncbi.nlm.nih.gov/pubmed/8878356/
      </StyledText>
    </>
  );
};

const Bmr = () => {
  return (
    <>
      <Title>O que é BMR ?</Title>
      <StyledText>
        A taxa metabólica basal (BMR) refere-se ao número de calorias que seu
        corpo queima todos os dias para mantê-lo vivo. A BMR não inclui
        atividade física, processo de digestão ou coisas como caminhar de uma
        sala para outra. Basicamente, BMR é o número de calorias que seu corpo
        gastaria em um período de 24 horas se tudo o que você fez foi ficar
        deitado na cama o dia inteiro. Este é o mínimo absoluto de calorias
        necessárias para garantir sua sobrevivência.
      </StyledText>
      <Title>Referência</Title>
      <StyledText>
        Artigo - What is My TDEE (Total Daily Energy Expenditure) Site:
        www.steelfitusa.com
      </StyledText>
      <StyledText>
        Tappy, L. (1996). Thermic effect of food and sympathetic nervous system
        activity in humans. Reproduction, Nutrition, Development, 36(4),
        391–397. http://www.ncbi.nlm.nih.gov/pubmed/8878356/
      </StyledText>
    </>
  );
};

const Water = () => {
  return (
    <>
      <Title>Importância da hidratação</Title>
      <StyledText>
        Cerca de 60% da composição corporal humana é feita de água. Em nossos
        músculos, esse índice sobe para 75%. Presente em todas as reações
        químicas que ocorrem em nosso organismo, ela dá forma e compõe a
        estrutura das células. Regula a temperatura corporal e auxilia no
        transporte de oxigênio e nutrientes. A hidratação é de extrema
        importância para todos os seres humanos, independente da faixa etária,
        sexo e biotipo físico. Esta importância no nosso organismo é mais
        evidente quando praticamos atividades físicas, uma vez que nosso corpo
        elimina grande quantidade desse líquido por meio do suor. A hidratação
        correta, principalmente durante a prática esportiva, é essencial para um
        bom desempenho. Ela mantém o corpo saudável, evita lesões e doenças mais
        graves.
      </StyledText>
      <Title>Referência</Title>
      <StyledText>
        Artigo - A IMPORTÂNCIA DA HIDRATAÇÃO NA ATIVIDADE FÍSICA
      </StyledText>
      <StyledText>
        https://ciaathletica.com.br/blog/alimentacao-saudavel/hidratacao-na-atividade-fisica/
      </StyledText>
    </>
  );
};

export default function Help({ navigation }) {
  const showHelp = navigation.getParam('type');

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
          {showHelp === 'all' && <All />}
          {showHelp === 'tdee' && <Tdee />}
          {showHelp === 'bmr' && <Bmr />}
          {showHelp === 'water' && <Water />}
        </Container>
      </Background>
    </SafeAreaView>
  );
}

Help.navigationOptions = () => ({
  header: null,
});

Help.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
