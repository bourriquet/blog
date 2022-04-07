import * as React from "react"
import ReactGA from "react-ga"

import "../index.css"

import Blog from "../components/Blog"
import Sidebar from "../components/sidebar/Sidebar"


const BlogPage = () => {
  React.useEffect(() =>  {
    ReactGA.initialize("G-T9YV287WJS");
    ReactGA.pageview(window.location.pathname);
  })

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
