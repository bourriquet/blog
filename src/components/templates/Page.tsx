import * as React from "react"
import Sidebar from "../sidebar/Sidebar"

import "../../index.css"

const PageTemplate = (props) => {
  return (
    <div className="columns">
     <div className="sidebar">
       <Sidebar />
     </div>
     <div className="content-container">
       {props.page}
     </div>
    </div>
  )
}

export default PageTemplate;
