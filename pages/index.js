import React from "react";
import Layout from "../src/components/Layout";
import { Stack, Heading, Box, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}>
          Make Money
        </Heading>
        <Text color={"gray.500"}>
          Monetize your content by charging your most loyal readers and reward them
          loyalty points. Give back to your loyal readers by granting them access to
          your pre-releases and sneak-peaks.
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"teal"}
            bg={"teal.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "teal.500",
            }}
          >
            Get Started
          </Button>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Layout>
  );
}
