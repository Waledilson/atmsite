import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "../app/nav-bar/nav-bar.jsx"
import { NextUIProvider } from "@nextui-org/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alert The Medic",
  description: "Alert The Medic",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NavBar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}
