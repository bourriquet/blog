import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faGoodreads, faInstagram, faLinkedin, faStrava, faTwitter } from '@fortawesome/free-brands-svg-icons'

import "../index.css"
import image from "../images/sidebar_image.jpeg"

const socialsData = [{
  icon: faTwitter,
  link: "https://twitter.com/mllerisette",
}, {
  icon: faInstagram,
  link: "https://www.instagram.com/_bourriquet",
}, {
  icon: faLinkedin,
  link: "https://www.linkedin.com/in/lauren-anders-30866076/",
}, {
  icon: faGoodreads,
  link: "https://www.goodreads.com/user/show/8235509-lauren-anders",
}, {
  icon: faBookOpen,
  link: "https://app.thestorygraph.com/profile/bourriquet",
}, {
  icon: faStrava,
  link: "https://www.strava.com/athletes/32231680",
}]

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
        <div class="sidebar-socials">
        {
          socialsData.map(function(social){
            return (
              <div class="sidebar-social">
                <a href={social.link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </div>
            )
          })
        }
        </div>
        <div class="sidebar-subtitle">
          Writing about all sorts
        </div>
      </div>
      <div class="sidebar-bottom">
        Links
      </div>
    </div>
  )
}

export default Sidebar
