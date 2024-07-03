"use client"
import React from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar"
import { Link } from "@nextui-org/link"

function NavBar() {
  return (
    <Navbar className="navbar">
      <NavbarContent justify="start" className="navbar-items sm:flex gap-4">
        <NavbarItem>
          <img className="navbar-brand" src="/img/atm-logo.png" />
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar-link" href="#">
            MEDIA
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar-link" href="#" aria-current="page">
            SHOWS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar-link" href="#">
            STORE
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="socials" justify="end">
        <NavbarItem className="socials-icon">
          <img src="/img/youtube_icon.svg" />
        </NavbarItem>
        <NavbarItem className="socials-icon">
          <img src="/img/facebook_icon.svg" />
        </NavbarItem>
        <NavbarItem className="socials-icon">
          <img src="/img/instagram_icon.svg" />
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarBrand justify="end">
        <img className="navbar-brand-end" src="/img/atm-logo.png" />
      </NavbarBrand> */}
    </Navbar>
  )
}

export default NavBar
