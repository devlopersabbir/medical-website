import {
  Flex,
  Box,
  Container,
  Stack,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NavItem from "./NavItem/NavItem";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineAlignRight } from "react-icons/ai";
import Mobile from "./Mobile/Mobile";
import { useRecoilState } from "recoil";
import { sidebarPopup } from "../../Recoil/popupAtom/atom";

const Header: React.FC = () => {
  const [open, setOpen] = useRecoilState(sidebarPopup);
  const router = useRouter();
  console.log(open);

  return (
    <Box
      as="nav"
      bg="whiteAlpha.400"
      boxShadow={"2xl"}
      _dark={{ bg: "blackAlpha.900" }}
      py={2}
    >
      <Container w="1280px" maxW="100%" mx="auto">
        <Flex align="center" justify="space-between">
          <Link href="/">
            <Text as="h1" fontSize="3xl" fontWeight="bold">
              LOGO
            </Text>
          </Link>
          <Flex flexDir={"row"} gap={{ base: 2, md: 5 }} align="center">
            <IconButton
              aria-label="Toggle"
              icon={<AiOutlineAlignRight />}
              fontSize="3xl"
              display={{ md: "none" }}
              onClick={() => setOpen(true)}
            />
            <Mobile />
            <Flex flexDir="row" display={{ base: "none", md: "flex" }} gap={6}>
              <NavItem isActive={router.asPath == "/"} text="Home" link="/" />
              <NavItem
                isActive={router.asPath == "/about"}
                text="About"
                link="/about"
              />
              <NavItem
                isActive={router.asPath == "/services"}
                text="Services"
                link="/services"
              />
              <NavItem
                isActive={router.asPath == "/contact"}
                text="Contact"
                link="/contact"
              />
            </Flex>
            <Button type="button" variant={"outline"} colorScheme="cyan">
              Appointment
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
