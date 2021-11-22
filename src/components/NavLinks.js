import React from "react";
import NavLink from "./NavLink";

export default function NavLinks() {
  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Products", href: "/products" },
    { id: 4, name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink key={link.id} name={link.name} href={link.href} />
      ))}
    </>
  );
}
