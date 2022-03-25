import * as React from "react"

import image from "../../images/sidebar_image.jpeg"
import Navigation from "./Navigation"
import Socials from "./Socials"

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <div className="sidebar-image">
          <img width="90%" src={image} />
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
