import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  margin: 0 10px 0 10px;
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

export const Box = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.76);
  margin: 10px;
  height: 150px;
  width: 100px;
  border-radius: 30px;
`;

export const ContainerMacros = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 5px 0 5px;
`;
export const WrapperMacros = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const WrapperItems = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const SmallText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const TitleMacros = styled.Text`
  top: -45px;
  margin: 2px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ImageStyled = styled(Image)`
  height: 40px;
  width: 40px;
  margin: 10px 0;
`;
