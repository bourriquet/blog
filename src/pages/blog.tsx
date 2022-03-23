import * as React from "react"

import Blog from "../components/Blog"
import Sidebar from "../components/sidebar/Sidebar"


const BlogPage = () => {
  return (
    <div class="columns">
     <div class="sidebar">
       <Sidebar />
     </div>
     <div class="content">
       <Blog />
     </div>
  </div>
  )
}

export default BlogPage
