import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Form = styled.ScrollView`
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const WrapperItems = styled.View`
  margin-bottom: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const CalculateButton = styled(Button)`
  margin-top: 15px;
  background: rgba(0, 0, 0, 0.76);
  height: 50px;
`;

export const FinalIMC = styled.Text`
  color: #757575;
  font-size: 28px;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`;

export const TableIMC = styled.View`
  height: 120px;
  margin: 0 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
`;

export const Separator = styled.View`
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  margin: 10px 0 0 0;
`;

export const ColorTest = styled.View`
  flex: 1;
  background: ${props => props.color};
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
`;

export const TextIMC = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
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

export const SmallText = styled.Text`
  font-size: 15px;
  color: #fff;
  text-align: center;
  margin-top: 10px;
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
