import * as React from "react"
import ReactGA from "react-ga"
import "../index.css"

import Now from "../components/Now"
import Sidebar from "../components/sidebar/Sidebar"


const NowPage = () => {
  React.useEffect(() => ReactGA.pageview(window.location.pathname))

  return (
    <div className="columns">
     <div className="sidebar">
       <Sidebar />
     </div>
     <div className="content-container">
       <Now />
     </div>
  </div>
  )
}

export default NowPage
