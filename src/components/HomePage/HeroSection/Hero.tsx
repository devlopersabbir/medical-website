import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../../Layout";

const Hero: React.FC = () => {
  return (
    <Flex
      as="section"
      id="heroSection"
      bg="blue.50"
      _dark={{ bg: "whiteAlpha.100" }}
    >
      <Layout>
        <Flex align="center" w="full" h="full">
          <Flex
            w={{ base: "100%", md: "50%" }}
            flexDir="column"
            align="flex-start"
          >
            <Text as="p" color="blue.400" fontSize="lg" fontWeight="medium">
              EIUSMOD TEMPOR INCIDIDUNT
            </Text>
            <Text
              as="h1"
              color="black"
              fontSize="5xl"
              fontWeight="bold"
              mb="5"
              lineHeight="shorter"
              _dark={{ color: "white" }}
            >
              Take the world's best quality Treadment
            </Text>
            <Button
              type="button"
              textTransform="capitalize"
              variant="solid"
              color="white"
              fontWeight="bold"
              fontSize="xl"
              p={6}
              bg="rootColor.500"
            >
              conatact us
            </Button>
          </Flex>
          <Flex w="50%" display={{ base: "none" }}></Flex>
        </Flex>
      </Layout>
    </Flex>
  );
};

export default Hero;
