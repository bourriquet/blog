import * as React from "react"

import image from "../../images/sidebar_image.jpeg"
import Navigation from "./Navigation"
import Socials from "./Socials"

const Sidebar = () => {
  return (
    <div class="sidebar-container">
      <div class="sidebar-top">
        <div class="sidebar-image">
          <img width="90%" src={image} />
        </div>
        <div class="sidebar-title">
          Lauren
        </div>
        <Socials />
      </div>
      <div class="sidebar-bottom">
        <Navigation />
      </div>
    </div>
  )
}

export default Sidebar
