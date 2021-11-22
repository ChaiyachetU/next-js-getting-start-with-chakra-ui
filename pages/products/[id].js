import React from "react";
import Layout from "../../src/components/Layout";
import ProductCarousel from "../../src/components/ProductCarousel";
import { Stack, Heading, Box, Text } from "@chakra-ui/react";

export default function Product({ product }) {
  return (
    <Layout>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}>
          {product.title}
        </Heading>
        <Text fontSize="3xl">{product.description}</Text>
        <ProductCarousel images={product.images} />
      </Stack>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const paths = data.products.map((product) => {
    return { params: { id: product.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();

  return {
    props: { product: data },
  };
}
