import * as React from "react"

import Now from "../components/Now"
import Sidebar from "../components/sidebar/Sidebar"


const NowPage = () => {
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
