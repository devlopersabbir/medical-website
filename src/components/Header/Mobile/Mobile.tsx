import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useRecoilState } from "recoil";
import { sidebarPopup } from "../../../Recoil/popupAtom/atom";

const Mobile: React.FC = () => {
  const [open, setOpen] = useRecoilState(sidebarPopup);
  return open ? (
    <Box
      as="div"
      w="100%"
      h="100%"
      maxH="full"
      maxW="full"
      position="fixed"
      left={0}
      top={0}
      bottom={0}
      right={0}
      bg="blackAlpha.600"
      zIndex={99999}
    >
      <Box
        as="div"
        w="300px"
        maxW="100%"
        position="fixed"
        left={0}
        top={0}
        bottom={0}
        bg="white"
        boxShadow={"2xl"}
        zIndex={999}
      >
        <Flex position="relative">
          <IconButton
            position="absolute"
            right={0}
            top={0}
            aria-label="Toggle"
            icon={<MdClose />}
            fontSize="3xl"
            display={{ md: "none" }}
            onClick={() => setOpen(false)}
          />
        </Flex>
      </Box>
    </Box>
  ) : null;
};

export default Mobile;
