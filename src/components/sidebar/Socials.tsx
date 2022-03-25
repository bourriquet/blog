import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faGoodreads, faInstagram, faLinkedin, faStrava, faTwitter } from '@fortawesome/free-brands-svg-icons'

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

const Socials = () => {
  return (
    <div className="sidebar-socials">
      {
        socialsData.map(function(social, index){
          return (
            <div className="sidebar-social" key={index}>
              <a href={social.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </div>
          )
        })
      }
    </div>
  )
}

export default Socials;
