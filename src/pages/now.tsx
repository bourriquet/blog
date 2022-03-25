import * as React from "react"

import Now from "../components/Now"
import Sidebar from "../components/sidebar/Sidebar"


const NowPage = () => {
  return (
    <div class="columns">
     <div class="sidebar">
       <Sidebar />
     </div>
     <div class="content-container">
       <Now />
     </div>
  </div>
  )
}

export default NowPage
