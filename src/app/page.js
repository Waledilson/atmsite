import styles from "./page.module.css"

export default function Home() {
  return (
    // <NextUIProvider>
    <main className={styles.main}>
      <div className="main-page">
        <div>
          <img className="lion-main-page-poster" src="/img/lion-cover.JPG" />
        </div>
        <div>
          <p className="listen">Listen to "The Lion Underneath"</p>
        </div>
      </div>
    </main>
    // </NextUIProvider>
  )
}
