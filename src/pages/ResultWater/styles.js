import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 0 50px 10px 50px;
`;

export const StyledText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
`;

export const WrapperItems = styled.View`
  display: flex;
  align-items: center;
`;
