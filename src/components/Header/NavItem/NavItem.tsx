import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface INavItemProps {
  text: string;
  link: string;
  isActive: boolean;
}

const NavItem: React.FC<INavItemProps> = ({ text, isActive, link }) => {
  return (
    <Link href={link}>
      <Text fontWeight="semibold" fontSize="lg">
        {text}
      </Text>
    </Link>
  );
};

export default NavItem;
