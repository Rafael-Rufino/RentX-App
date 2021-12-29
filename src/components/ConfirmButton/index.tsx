import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Name } from "./styles";
interface Props extends RectButtonProps {
  title: string;
}
export function ConfirmButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Name>{title}</Name>
    </Container>
  );
}
