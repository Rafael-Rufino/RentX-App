import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { Car } from "../../components/Car";

export function Home() {
  const carData = {
    brand: "AUDI",
    name: "5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png",
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
