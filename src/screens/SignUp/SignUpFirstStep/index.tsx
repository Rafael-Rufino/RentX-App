import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import theme from "../../../global/styles/theme";
import * as Yup from "yup";
import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  Footer,
  FormTitle,
} from "./styles";

import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
export function SignUpFirstStep() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatorio"),
        email: Yup.string()
          .email("E-mail inválida")
          .required("E-mail é obrigatorio"),
        name: Yup.string().required("Nome é obrigatorio"),
      });
      const data = { name, email, driverLicense };
      await schema.validate(data);
      navigation.navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Opa", error.message);
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <BackButton onPress={handleGoBack} />
            <Steps>
              <Bullet active={true} />
              <Bullet />
            </Steps>
          </Header>
          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastrado de{"\n"}forma rápida e fácil</SubTitle>
          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Name"
              onChangeText={setName}
              value={name}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setDriverLicense}
              value={driverLicense}
            />
          </Form>
          <Footer>
            <Button
              onPress={handleNextStep}
              title="Próximo"
              enabled={true}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
