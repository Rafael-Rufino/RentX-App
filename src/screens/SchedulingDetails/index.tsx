import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Header,
  CarImages,
  Content,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Datails,
  Acessories,
  CalendarIcon,
  RentalPeriod,
  Footer,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RendalPriceLabel,
  RendalPriceQuata,
  RentalPriceTotal,
  RendalPriceDetails,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

export function SchedulingDetails() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png",
          ]}
        />
      </CarImages>

      <Content>
        <Datails>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 500</Price>
          </Rent>
        </Datails>
        <Acessories>
          <Accessory name="380km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Acessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RendalPriceLabel>Total</RendalPriceLabel>
          <RendalPriceDetails>
            <RendalPriceQuata>R$ 580 x3 diárias</RendalPriceQuata>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RendalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Confirma" color={theme.colors.success} />
      </Footer>
    </Container>
  );
}
