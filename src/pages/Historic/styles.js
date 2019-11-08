import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: rgba(0, 0, 0, 0.76);
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
`;

export const WrapperLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HistoricItem = styled.TouchableOpacity`
  margin: 3px 10px;
  padding: 0 10px;
  height: 80px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.76);
`;

export const StyledText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const StyledImage = styled(Image)`
  height: 50px;
  width: 50px;
`;
