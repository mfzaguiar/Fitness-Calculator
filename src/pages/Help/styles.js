import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Header = styled.View`
  display: flex;
  background-color: rgba(0, 0, 0, 0.76);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  height: 40;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
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
