import { Container, Flex } from "@chakra-ui/react";
import React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Container w="1280px" maxW="100%" mx="auto">
      <main style={{ width: "100%", height: "100%", padding: "0.5rem" }}>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
