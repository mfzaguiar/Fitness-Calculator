import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
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

export const StyledText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;

export const SmallText = styled.Text`
  color: #fff;
  font-weight: normal;
  font-size: 18px;
`;
