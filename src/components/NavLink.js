import React from "react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavLink({ name, href }) {
  return (
    <NextLink href={href}>
      <Link
        mr="4"
        px={3}
        py={2}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: "gray.200",
        }}
      >
        {name}
      </Link>
    </NextLink>
  );
}
