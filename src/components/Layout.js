import React from "react";
import Head from "next/head";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex height="100vh" flexDirection="column" justifyContent="space-between">
      <Head>
        <title>Next JS 💖 Chakra UI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Flex>
  );
}
