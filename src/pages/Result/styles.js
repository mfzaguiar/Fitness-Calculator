import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  margin: 0 10px 0 10px;
`;

export const Header = styled.View`
  display: flex;
  background-color: #6d6e71;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  height: 40;
`;

export const Box = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 10px;
  height: 150px;
  border-radius: 30px;
`;

export const WrapperMacros = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
`;

export const StyledText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
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
  margin-left: 10px;
  text-align: center;
`;

export const ImageBg = styled(ImageBackground)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
