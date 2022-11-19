import { Box, Flex, Icon, Image, Input, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsPlayBtn, BsPlayBtnFill } from "react-icons/bs";
import Consultation from "./Consultation/Consultation";
import FindDoctor from "./FindDoctor/FindDoctor";

const Welcome: React.FC = () => {
  return (
    <Flex
      flexDir={{ lg: "column", base: "column", xl: "row" }}
      justify="space-between"
      gap={7}
      py="16"
      align={"center"}
    >
      <Box
        mt="-32"
        p={{ base: "2", sm: "4", md: "6", lg: "8" }}
        bg={"whiteAlpha.100"}
        backdropBlur="3xl"
        boxShadow="lg"
        borderRadius="sm"
        w={{ base: "full", lg: "full", xl: "33%" }}
      >
        <Consultation />
      </Box>
      <Flex w={{ base: "full", lg: "full", xl: "33%" }}>
        <FindDoctor />
      </Flex>
      <Flex
        w={{ base: "full", lg: "full", xl: "33%" }}
        align="center"
        justify="center"
      >
        <Box position="relative">
          <Link href="https://youtu.be/Eu6dgvpaCmk" target="_blank">
            <Image
              src="https://i.ytimg.com/vi/Eu6dgvpaCmk/maxresdefault.jpg"
              w="full"
              h="full"
              objectFit="cover"
            />
            <Icon
              top={"40%"}
              right={"40%"}
              position="absolute"
              as={BsPlayBtnFill}
              color="red.500"
              rounded={"full"}
              p="1"
              fontSize="6xl"
            />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Welcome;
