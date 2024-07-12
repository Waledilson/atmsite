import React from "react"
import { Suspense } from "react"
import YoutubeEmbed from "../ui/youtube-embed.jsx"

function MediaView() {
  return (
    <div className="media-view">
      <div>
        <h1 className="media-title">MEDIA</h1>
        <div className="streaming-platforms">
          <a href="https://open.spotify.com/artist/21ha0CPxFe19DAiE4aKdgs">
            <img className="spotify-logo" src="/img/spotify-logo.svg" />
          </a>
          <a href="">
            <img className="apple-logo" src="/img/apple-music-logo.svg" />
          </a>
          <a href="">
            <img className="amazon-logo" src="/img/Amazon_Music_White.png" />
          </a>
          <a href="">
            <img className="deezer-logo" src="/img/deezer-logo.svg" />
          </a>
          <a href="">
            <img className="tidal-logo" src="/img/tidal-logo.png" />
          </a>
          <a href="">
            <img className="youtube-logo" src="/img/YouTube-logo.svg" />
          </a>

          {/* <p>spotify</p>
          <p>amazon</p>
          <p>apple music</p>
          <p>deezer</p>
          <p>tidal</p> */}
        </div>
      </div>

      <div className="youtube">
        <Suspense fallback={<p>Loading video...</p>}>
          <p>Corporate Kid</p>
          <YoutubeEmbed embedId={`gC2TWLJXvJw?si=Wug6Cvp7FKivsUJx`} />
          <p>Echo and Fade</p>
          <YoutubeEmbed embedId={`nb9_bH3sENE?si=MVkE4QwLsJBdTaQy`} />
          <p>Tragically Hip - Grace, too</p>
          <YoutubeEmbed embedId={`WFiG9Z2QvLE?si=BOA1_zdw5YqguDhY`} />
          <p>The Weatherman (pt. 2)</p>
          <YoutubeEmbed embedId={`_g69FegBvwA?si=EjGaL13jVvH_d9BW`} />
        </Suspense>
      </div>
    </div>
  )
}

export default MediaView
