import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface IBoxItemProps {
  image: string;
  imgAlt: string;
  headingText: string;
  pragraph: string;
}

const BoxItem: React.FC<IBoxItemProps> = ({
  image,
  imgAlt,
  headingText,
  pragraph,
}) => {
  return (
    <Stack
      textAlign="center"
      align="center"
      p="5"
      _hover={{ boxShadow: "2xl", cursor: "pointer" }}
      bg="whiteAlpha.700"
      transition="ease all 0.3s"
      rounded="md"
    >
      <Image src={image} alt={imgAlt} w="20" />
      <Text as="h2" fontSize="2xl" fontWeight="semibold" py={3}>
        {headingText}
      </Text>
      <Text as="p" color="blackAlpha.700" fontSize="lg">
        {pragraph}
      </Text>
    </Stack>
  );
};

export default BoxItem;
