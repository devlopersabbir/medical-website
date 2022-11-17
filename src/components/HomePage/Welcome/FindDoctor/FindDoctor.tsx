import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const FindDoctor = () => {
  return (
    <Stack>
      <Stack spacing={5}>
        <Text
          as="p"
          fontSize="lg"
          fontWeight="semibold"
          color="blackAlpha.600"
          pb={2}
        >
          CONTACT US REQUEST FOR YOUR
        </Text>
        <Text as="h2" fontSize={"4xl"} lineHeight="2.6rem" fontWeight="bold">
          Find Best Doctors With
          <span style={{ color: "rgb(19, 162, 183)" }}>AESTHETIC</span>
        </Text>
        <Text as="p" mt={4} fontSize="lg">
          30 Years of experience in Cosmetic Surgery.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Text>
      </Stack>
    </Stack>
  );
};

export default FindDoctor;
