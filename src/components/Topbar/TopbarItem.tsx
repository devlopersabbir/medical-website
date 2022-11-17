import { Box, Flex, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface ITopbarItem {
  text: string;
  TextIcon: IconType;
  icon?: IconType;
  link?: string;
}
const TopbarItem: React.FC<ITopbarItem> = ({ text, TextIcon }) => {
  return (
    <Flex gap={1} align="center" color="white">
      <Icon fontSize="2xl" as={TextIcon} />
      <Text fontWeight="semibold">{text}</Text>
    </Flex>
  );
};

export default TopbarItem;
