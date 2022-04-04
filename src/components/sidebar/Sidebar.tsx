import * as React from "react"
import Navigation from "./Navigation"
import Socials from "./Socials"

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <div className="sidebar-image">
          <img width="90%" src="https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/sidebar_image.jpeg" />
        </div>
        <div className="sidebar-title">
          Lauren
        </div>
        <Socials />
      </div>
      <div className="sidebar-bottom">
        <Navigation />
      </div>
    </div>
  )
}

export default Sidebar
