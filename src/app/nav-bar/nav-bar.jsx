"use client"
import React from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar"
import Link from "next/link"

function NavBar() {
  return (
    <Navbar className="navbar">
      <NavbarContent className="navbar-items sm:flex gap-2">
        {/* <NavbarItem>
          <Link href="/">
            <img className="navbar-brand" src="/img/atm-logo.png" />
          </Link>
        </NavbarItem> */}

        <NavbarItem>
          <Link className="navbar-link" href="/">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar-link" href="/media-view">
            MEDIA
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar-link" href="/shows-view" aria-current="page">
            SHOWS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="navbar-link"
            href="https://www.alertthemedic.squarespace.com/store"
          >
            STORE
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="socials" justify="end">
        {/* <NavbarItem className="socials-icon">
          <img src="/img/youtube_icon.svg" />
        </NavbarItem> */}
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
