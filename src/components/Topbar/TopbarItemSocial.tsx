import { Box, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface ISocialIcon {
  icon: IconType;
  link: string;
  iconColor: string;
  iconBg: string;
}

const TopbarItemSocial: React.FC<ISocialIcon> = ({
  icon,
  link,
  iconBg,
  iconColor,
}) => {
  return (
    <Link href={link} target={"_blank"}>
      <Flex
        _hover={{
          bg: `${iconBg}`,
          color: `${iconColor}`,
          transition: "ease",
          transitionDuration: "0.3s",
        }}
        p="1"
        rounded="md"
        color="white"
      >
        <Icon fontSize="2xl" as={icon} />
      </Flex>
    </Link>
  );
};

export default TopbarItemSocial;
