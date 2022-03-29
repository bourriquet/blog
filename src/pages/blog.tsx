import * as React from "react"
import "../index.css"

import Blog from "../components/Blog"
import Sidebar from "../components/sidebar/Sidebar"


const BlogPage = () => {
  return (
    <div className="columns">
     <div className="sidebar">
       <Sidebar />
     </div>
     <div className="content-container">
       <Blog />
     </div>
  </div>
  )
}

export default BlogPage
