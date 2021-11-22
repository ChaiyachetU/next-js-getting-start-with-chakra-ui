import React from "react";
import Layout from "../../src/components/Layout";
import ProductCard from "../../src/components/ProductCard";
import { Box, Heading, Stack, Flex } from "@chakra-ui/react";

export default function Products({ products }) {
  return (
    <Layout>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}>
          Products
        </Heading>
        <Flex flexWrap="wrap" justifyContent="space-around">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Flex>
      </Stack>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: { products: data.products },
  };
}
