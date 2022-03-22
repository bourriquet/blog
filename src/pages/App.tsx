import * as React from "react"
import "../index.css"

import Sidebar from "../components/Sidebar"


const App = () => {
  return (
    <div class="columns">
     <div class="sidebar">
       <Sidebar />
     </div>
     <div class="content">
       Column 2
    </div>
  </div>
  )
}

export default App
