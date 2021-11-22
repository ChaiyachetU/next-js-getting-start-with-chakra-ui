import React from "react";
import { Button } from "@chakra-ui/react";

export default function SocialButton({ children, href }) {
  return (
    <Button
      bg="blackAlpha.100"
      rounded="full"
      w="12"
      h="12"
      cursor="pointer"
      as="a"
      href={href}
      transition="background 0.3s ease"
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      {children}
    </Button>
  );
}
