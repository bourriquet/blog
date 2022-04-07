import * as React from "react"
import Me from "../components/Me"
import Sidebar from "../components/sidebar/Sidebar"

import "../index.css"

const MePage = () => {
  React.useEffect(() =>  {
    ReactGA.initialize("G-T9YV287WJS");
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <div className="columns">
     <div className="sidebar">
       <Sidebar />
     </div>
     <div className="content-container">
       <Me />
     </div>
    </div>
  )
}

export default MePage
