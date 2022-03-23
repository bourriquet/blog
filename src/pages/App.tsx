import * as React from "react"

import Blog from "../components/Blog"
import Me from "../components/Me"
import Now from "../components/Now"
import Sidebar from "../components/sidebar/Sidebar"


const App = () => {
  return (
    <div class="columns">
     <div class="sidebar">
       <Sidebar />
     </div>
     <div class="content">
        Content
     </div>
  </div>
  )
}

export default App
