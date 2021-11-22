import React from "react";
import { useRouter } from "next/router";

import { Button, ButtonGroup } from "@chakra-ui/react";

export default function NavButtons() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    router.push(`/${e.target.value}`);
  };

  return (
    <ButtonGroup spacing={4}>
      <Button colorScheme="teal" value="/signup" onClick={handleClick}>
        Sign Up
      </Button>
      <Button colorScheme="teal" value="/login" onClick={handleClick}>
        Log In
      </Button>
    </ButtonGroup>
  );
}
