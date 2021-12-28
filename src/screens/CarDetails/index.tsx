import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

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
  About,
} from "./styles";

export function CarDetails() {
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
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro lide indultado
          na número praça Real maestranza de servilla. è um beissimo arro para
          quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
}
