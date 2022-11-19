import { Flex } from "@chakra-ui/react";
import React from "react";
import BoxItem from "./BoxItem";

const Box = () => {
  return (
    <Flex gap={6} my={5} align="center" flexDir={{ base: "column", md: "row" }}>
      <BoxItem
        image="https://preview.colorlib.com/theme/aesthetic/img/icons/ci-1.png.webp"
        imgAlt="icon1"
        headingText="Advanced equipment"
        pragraph="Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor
        cididunt facilisis."
      />
      <BoxItem
        image="https://preview.colorlib.com/theme/aesthetic/img/icons/ci-2.png.webp"
        imgAlt="icon2"
        headingText="Qualified doctors"
        pragraph="Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor
        cididunt facilisis."
      />
      <BoxItem
        image="https://preview.colorlib.com/theme/aesthetic/img/icons/ci-3.png.webp"
        imgAlt="icon3"
        headingText="Certified services"
        pragraph="Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor
        cididunt facilisis."
      />
      <BoxItem
        image="https://preview.colorlib.com/theme/aesthetic/img/icons/ci-4.png.webp"
        imgAlt="icon4"
        headingText="Emergency care"
        pragraph="Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor
        cididunt facilisis."
      />
    </Flex>
  );
};

export default Box;
