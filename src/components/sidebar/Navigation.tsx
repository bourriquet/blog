import * as React from "react"
import { Link } from 'react-router-dom';

const navData = [{
  name: "Me",
  route: "me",
}, {
  name: "Now",
  route: "now",
}, {
  name: "Blog",
  route: "blog",
}]

const Navigation = () => {
  return (
    <div class="sidebar-navigation">
      {
        navData.map(function(nav){
          return (
            <div class="sidebar-link">
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
