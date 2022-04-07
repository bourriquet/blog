import * as React from "react"
import { Helmet } from "react-helmet"
import Sidebar from "../sidebar/Sidebar"
import favicon from "../../images/favicon.png"

import "../../index.css"

const PageTemplate = (props) => {
  return (
    <>
      <Helmet>
        <title>Lauren Anders</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <div className="columns">
       <div className="sidebar">
         <Sidebar />
       </div>
       <div className="content-container">
         {props.page}
       </div>
      </div>
    </>
  )
}

export default PageTemplate;
