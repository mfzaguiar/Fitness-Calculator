import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.76);
`;

export const WrapperItems = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 80px;
  margin-top: 20px;
`;

export const Header = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.76);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  height: 50;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledText = styled.Text`
  text-align: justify;
  font-size: 18px;
  font-weight: normal;
  color: #fff;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const ListText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SubTitle = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ImageStyled = styled(Image)`
  height: 60px;
  width: 60px;
  margin-right: 20px;
`;

export const Strong = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
