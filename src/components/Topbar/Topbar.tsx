import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import TopbarItem from "./TopbarItem";
import {
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { MdFacebook, MdLocationPin, MdOutlineWatchLater } from "react-icons/md";
import TopbarItemSocial from "./TopbarItemSocial";

const Topbar: React.FC = () => {
  return (
    <Box as="div" bg="rgb(12, 93, 105)" _dark={{ bg: "blackAlpha.600" }} py={2}>
      <Container w="1280px" maxW="100%" mx="auto">
        <Flex
          justify="space-between"
          align="center"
          gap={{ base: "4", md: "0" }}
          flexDir={{ base: "column", md: "column", lg: "row" }}
        >
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            align="center"
            gap={{ base: "2", md: "4" }}
          >
            <TopbarItem text="1-677-124-44227" TextIcon={BsFillTelephoneFill} />
            <TopbarItem
              text="Los Angeles Gournadi, 1230 Bariasl"
              TextIcon={MdLocationPin}
            />
            <TopbarItem
              text="Mon to Sat 9:00am to 18:00pm"
              TextIcon={MdOutlineWatchLater}
            />
          </Flex>
          <Flex gap={4} flexDir="row">
            <TopbarItemSocial
              iconColor="facebook.400"
              iconBg="facebook.100"
              icon={MdFacebook}
              link="https://www.facebook.com/devlopersabbir"
            />
            <TopbarItemSocial
              iconColor="green.400"
              iconBg="green.100"
              icon={BsInstagram}
              link="https://www.instagram.com/devlopersabbir"
            />
            <TopbarItemSocial
              iconColor="blue.400"
              iconBg="blue.100"
              icon={BsTwitter}
              link="https://www.twitter.com/devlopersabbir"
            />
            <TopbarItemSocial
              iconColor="red.600"
              iconBg="red.100"
              icon={BsYoutube}
              link="https://www.youtube.com/c/stsabbir"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Topbar;
