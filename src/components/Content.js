import React from "react";
import { Container } from "@chakra-ui/react";

export default function Content({ children }) {
  return (
    <Container width="100%" maxWidth="80rem" mt="20" pt="8" pb="8">
      {children}
    </Container>
  );
}
