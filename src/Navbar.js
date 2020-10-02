import React from "react";
import {
  Box,
  Heading,
  Icon,
  Flex,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/core";

const MenuItems = ({ children }) => {
  const { colorMode } = useColorMode();
  const primaryColor = colorMode === "dark" ? "white" : "white";
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block" color={primaryColor}>
      {children}
    </Text>
  );
};

const NavBar = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();
  const primaryColor = colorMode === "dark" ? "white" : "white";
  const bgColor = colorMode === "dark" ? "gray.700" : "white";

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "dark" ? "black" : "teal.500"}
      color={primaryColor}
    >
      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
        color={primaryColor}
      >
        <Icon
          mr={6}
          size="20px"
          name={colorMode === "dark" ? "sun" : "moon"}
          onClick={() => toggleColorMode()}
        />
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box>
    </Flex>
  );
};

export default NavBar;
