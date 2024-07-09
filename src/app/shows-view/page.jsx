import React from "react"

function ShowsView() {
  function Poster() {
    return <img className="poster" src="/img/Jubilee.jpeg" />
  }
  return (
    <div className="shows-view">
      <h1>Come rock the f out with us</h1>
      <Poster />
    </div>
  )
}
export default ShowsView
