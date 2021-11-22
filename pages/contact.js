import React from "react";
import Layout from "../src/components/Layout";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Flex,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <Layout>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}>
            Contact
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Fill up the form below to contact ✌️
          </Text>
        </Stack>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Stack mb={4} direction={"row"} align={"center"}>
            <FaPhoneAlt />
            <Text>0999999999</Text>
          </Stack>
          <Stack mb={4} direction={"row"} align={"center"}>
            <FaMailBulk />
            <Text>example@mail.com</Text>
          </Stack>
          <Stack mb={4} direction={"row"} align={"center"}>
            <FaMapMarkerAlt />
            <Text>Bangkok, Thailand</Text>
          </Stack>
        </Flex>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Your Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="message" />
            </FormControl>
          </Stack>
          <Stack mt={10}>
            <Button
              bg={"teal.400"}
              color={"white"}
              _hover={{
                bg: "teal.500",
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Layout>
  );
}
