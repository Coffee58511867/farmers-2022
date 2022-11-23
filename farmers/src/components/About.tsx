import {
  Flex,
  VStack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Hero from "../images/crop.jpg";

function About() {
  return (
    <div>
      <Header />
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 5, 0]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack
          p={7}
          spacing={10}
          py={[4, 2, 40]}
          alignItems="flex-start"
          height={{
            base: "auto",
            md: "100vh",
            lg: "62em",
            xl: "80em",
            "2xl": "96em",
          }}
          w={{
            sm: "30em",
            md: "48em",
            lg: "62em",
            xl: "80em",
            "2xl": "96em",
          }}
        >
          <Heading
            fontSize={["30px", "30px", "6xl"]}
            color="#1C6B28"
            data-testid="hero"
            fontWeight={700}
          >
            About the project
          </Heading>
          <VStack py={[0, 0, 16]}>
            <Text fontSize={[20, 17, 25]}>
              This Project is made as a step towards integrating AI revolution
              with Agriculture. It facilitates smart agriculture with features
              like chatbot for queries, integrated crop and fertilizer
              recommendation system and prediction of plant disease
              transmission. This software is ready to be deployed on servers and
              clouds .
            </Text>
          </VStack>
        </VStack>

        <VStack>
          <Image
            src={Hero}
            p={30}
            py={30}
            height={{
              base: "auto",
              md: "100vh",
              lg: "62em",
              xl: "80em",
              "2xl": "96em",
            }}
            width={{
              base: "auto",
              md: "100vh",
              lg: "62em",
              xl: "80em",
              "2xl": "96em",
            }}
          />
        </VStack>
      </Flex>
      <Text fontSize={[20, 17, 25]}>
              The software pipeline of project can be considered of mapping of
              three parts: Machine Learning, Deep learning, transformer, etc.
              model training, saving and inference deployment. Django Backend AI
              integration, backend programming, module development and admin
              preparation Front end development, feature designing and
              integration An Interactive Mobile Chat Bot Application that
              assists farmers with Basic Queries
            </Text>
    </div>
  );
}

export default About;
