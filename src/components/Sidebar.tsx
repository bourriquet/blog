import * as React from "react"
import "../index.css"
import image from "../images/sidebar_image.jpeg"

const Sidebar = () => {
  return (
    <div class="sidebar-container">
      <div class="sidebar-image">
        <img width="90%" src={image} />
      </div>
    </div>
  )
}

export default Sidebar
