import styles from "./page.module.css"
import MainView from "../app/main-view/main-view.jsx"
import NavBar from "../app/nav-bar/nav-bar.jsx"
import { NextUIProvider } from "@nextui-org/react"

export default function Home() {
  return (
    <NextUIProvider>
      <main className={styles.main}>
        <NavBar />
        <div>
          <MainView />
        </div>
      </main>
    </NextUIProvider>
  )
}
