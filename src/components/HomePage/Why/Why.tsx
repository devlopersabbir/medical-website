import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Boxs from "./OfferBox/Boxs";

const Why: React.FC = () => {
  return (
    <Box my="4">
      <Text
        as="p"
        fontSize="lg"
        fontWeight="semibold"
        color="blackAlpha.600"
        _dark={{ color: "whiteAlpha.600" }}
        textAlign="center"
      >
        WHY CHOOSE US?
      </Text>
      <Text as="h1" fontSize={"5xl"} fontWeight="bold" align={"center"}>
        Offer for you
      </Text>
      <Boxs />
    </Box>
  );
};

export default Why;
