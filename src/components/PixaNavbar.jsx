import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { DiMagento } from "react-icons/di";
import { NavLink } from "react-router-dom";

export default function PixaNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Images",
    "ContactUs",
    "SignIn",
    "LogIn",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <DiMagento />
          <p className="font-bold text-inherit">PixaBay</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <DiMagento />
          <p className="font-bold text-inherit">PixaBay</p>
        </NavbarBrand>
        <NavbarItem>
          <NavLink to="/">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavLink to="/images">
            Images
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/contactus">
            Contact Us
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <NavLink to="/login">Login</NavLink>
        </NavbarItem>
        <NavbarItem>
          <Button as={NavLink} color="warning" to="/signin" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              to={item.toLocaleLowerCase()}
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
