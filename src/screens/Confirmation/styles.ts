import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: 96px;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;
export const Title = styled.Text`
  margin-top: 40px;
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;
export const Message = styled.Text`
  margin-top: 16px;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
  line-height: ${RFValue(15)}px;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
`;
