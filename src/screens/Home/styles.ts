import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 32px 24px;
`;
export const HeaderContent = styled.View`
  flex-direction: row
  align-items: center;
  justify-content:space-between;
  
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400}
  color: ${({ theme }) => theme.colors.text};
`;
