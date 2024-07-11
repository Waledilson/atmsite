import React from "react"
import { Suspense } from "react"
import YoutubeEmbed from "../ui/youtube-embed.jsx"

function MediaView() {
  return (
    <div className="media-view">
      <div>
        <h1 className="media-title">Stream Us</h1>
        <div className="streaming-platforms">
          <p>spotify</p>
          <p>amazon</p>
          <p>apple music</p>
          <p>deezer</p>
          <p>tidal</p>
        </div>
      </div>

      <div className="youtube">
        <Suspense fallback={<p>Loading video...</p>}>
          <YoutubeEmbed embedId={`gC2TWLJXvJw?si=Wug6Cvp7FKivsUJx`} />
          <YoutubeEmbed embedId={`nb9_bH3sENE?si=MVkE4QwLsJBdTaQy`} />
          <YoutubeEmbed embedId={`WFiG9Z2QvLE?si=BOA1_zdw5YqguDhY`} />
          <YoutubeEmbed embedId={`_g69FegBvwA?si=EjGaL13jVvH_d9BW`} />
        </Suspense>
      </div>
    </div>
  )
}

export default MediaView
