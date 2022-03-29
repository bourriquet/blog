import * as React from "react"
import "../index.css"

import Me from "../components/Me"
import Sidebar from "../components/sidebar/Sidebar"


const MePage = () => {
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
