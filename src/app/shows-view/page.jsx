import React from "react"

function ShowsView() {
  function Poster() {
    return <img className="poster" src="/img/Jubilee.jpeg" />
  }
  return (
    <div className="shows-view">
      <h1>Shows</h1>
      <Poster />
      <div className="contact">
        <p>
          for booking inquries get at us <span></span>
          <a href="mailto:info@alertthemedic.com">info@alertthemedic.com</a>
        </p>
      </div>
    </div>
  )
}
export default ShowsView
