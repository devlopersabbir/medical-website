import { Button, Flex, Input, Select, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Consultation = () => {
  return (
    <Flex flexDir={"column"} gap={5}>
      <Stack spacing={-3}>
        <Text
          as="p"
          fontSize="lg"
          fontWeight="semibold"
          color="blackAlpha.600"
          _dark={{ color: "whiteAlpha.600" }}
        >
          CONTACT US REQUEST FOR YOUR
        </Text>
        <Text as="h1" fontSize={"5xl"} fontWeight="bold">
          Consultation
        </Text>
      </Stack>
      <Flex>
        <form>
          <Input
            type="text"
            placeholder="Name"
            my={2}
            variant="outline"
            fontWeight="semibold"
          />
          <Input
            type="email"
            placeholder="Email"
            my={2}
            variant="outline"
            fontWeight="semibold"
          />
          <Input
            type="datetime-local"
            my={2}
            variant="outline"
            fontWeight="semibold"
          />
          <Select placeholder="Type of service" fontWeight="semibold" my={2}>
            <option value="a">Sertified services</option>
            <option value="b">Sertified services 2</option>
            <option value="c">Sertified services 3</option>
          </Select>
          <Button
            type="submit"
            w="full"
            my={2}
            bg="rootColor.500"
            color="white"
            _hover={{ bg: "blue.400", color: "white" }}
            textTransform="uppercase"
            fontWeight="bold"
          >
            Book appoitment
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default Consultation;
