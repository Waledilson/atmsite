"use client"
import React from "react"
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar"
import Link from "next/link"

function NavBar() {
  return (
    <Navbar className="navbar">
      <NavbarContent className="navbar-items sm:flex gap-2">
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
          <a
            target="_blank"
            className="navbar-link"
            href="https://alertthemedic.squarespace.com/store"
          >
            STORE
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="socials" justify="end">
        <NavbarItem className="socials-icon">
          <a
            href="https://www.facebook.com/alertthemedic?mibextid=LQQJ4d&rdid=kbookiCXvXXZSKvi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Ftfio9Mm9vXAXYdmv%2F%3Fmibextid%3DLQQJ4d"
            target="_blank"
          >
            <img src="/img/facebook_icon.svg" />
          </a>
        </NavbarItem>
        <NavbarItem className="socials-icon">
          <a
            href="https://www.instagram.com/alertthemedic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <img src="/img/instagram_icon.svg" />
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar
