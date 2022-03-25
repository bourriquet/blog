import * as React from "react"
import { Link } from "gatsby"

const navData = [{
  name: "Me",
  route: "/me",
}, {
  name: "Now",
  route: "/now",
}, {
  name: "Blog",
  route: "/blog",
}]

const Navigation = () => {
  return (
    <div className="sidebar-navigation">
      {
        navData.map(function(nav, index){
          return (
            <div className="sidebar-link" key={index}>
              <Link to={nav.route}>
                {nav.name}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Navigation;
