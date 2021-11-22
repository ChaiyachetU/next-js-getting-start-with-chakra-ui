import React from "react";
import NextLink from "next/link";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${product.thumbnail})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={product.thumbnail}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {product.brand}
          </Text>

          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            _hover={{
              color: "gray.600",
            }}
          >
            <NextLink href={"/products/" + product.id.toString()}>
              {product.title}
            </NextLink>
          </Heading>

          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $
              {((product.price * (100 - product.discountPercentage)) / 100).toFixed(
                0
              )}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ${product.price}
            </Text>
          </Stack>
          <NextLink href={"/products/" + product.id.toString()}>
            <Button w="60%" display="flex" justifyContent="space-around">
              View More
              <FaExternalLinkAlt />
            </Button>
          </NextLink>
        </Stack>
      </Box>
    </Center>
  );
}
