import React from "react";
import { Text, Flex, Stack } from "@chakra-ui/react";
import SocialButton from "./SocialButton";
import Content from "./Content";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <Content>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.200",
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.200",
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Stack direction={"row"} spacing={6}>
          <SocialButton href={"#"}>
            <FaInstagram />
          </SocialButton>
          <SocialButton href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton href={"#"}>
            <FaFacebook />
          </SocialButton>
        </Stack>
      </Flex>
      <Text pt={6} fontSize={"sm"} textAlign={"center"}>
        © {new Date().getFullYear()} Next JS & Chakra Templates. All rights reserved
      </Text>
    </Content>
  );
}
