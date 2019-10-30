import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
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

export const StyledText = styled.Text`
  padding: 20px;
  text-align: justify;
  font-size: 20;
  font-weight: normal;
  color: #fff;
  line-height: 35;
`;
