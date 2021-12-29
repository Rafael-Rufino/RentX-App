import React from "react";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { useNavigation } from "@react-navigation/native";

export function Scheduling() {
  const navigation = useNavigation();
  const theme = useTheme();
  function handleConfirmeRental() {
    navigation.navigate("SchedulingDetails");
  }
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}
          data de inicio e {"\n"}
          fim do aluguel{"\n"}
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÈ</DateTitle>
            <DateValue selected={false}>20/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmeRental} />
      </Footer>
    </Container>
  );
}
