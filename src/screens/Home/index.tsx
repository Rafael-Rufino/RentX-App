import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { Car } from "../../components/Car";
import { useNavigation } from "@react-navigation/native";
import { CarDetails } from "../CarDetails";

export function Home() {
  const navigation = useNavigation();
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

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }
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
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
