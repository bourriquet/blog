import * as React from "react"

import Me from "../components/Me"
import Sidebar from "../components/sidebar/Sidebar"


const MePage = () => {
  return (
    <div class="columns">
     <div class="sidebar">
       <Sidebar />
     </div>
     <div class="content-container">
       <Me />
     </div>
    </div>
  )
}

export default MePage
