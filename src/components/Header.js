import React from "react";
import {
  Container,
  Box,
  Flex,
  Image,
  Link,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex
        as="header"
        w="full"
        minHeight="60px"
        alignItems="center"
        boxShadow="0 1px 2px 0 rgba(0,0,0,0.05)"
        backdropFilter="saturate(180%) blur(5px)"
        position="fixed"
        top="0"
        zIndex="999"
      >
        <Container width="100%" maxWidth="80rem">
          <Flex justifyContent="space-between">
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Box py="2" display={{ base: "none", sm: "flex" }}>
              <Link
                href="/"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Image src="/logo.png" alt="logo" height="35px" />
              </Link>
            </Box>
            <Flex alignItems="center">
              <Box display={{ base: "none", md: "flex" }}>
                <NavLinks />
              </Box>
              <Box>
                <NavButtons />
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Flex>

      {isOpen ? (
        <Box mx={2} pt={20} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <NavLinks />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
