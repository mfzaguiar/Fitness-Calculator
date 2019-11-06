import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
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

export const Form = styled.ScrollView`
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const WrapperItems = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`;

export const TextSlider = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const CalculateButton = styled(Button)`
  margin-top: 15px;
  background: rgba(0, 0, 0, 0.76);
  height: 60px;
`;
