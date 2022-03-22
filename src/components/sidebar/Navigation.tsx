import * as React from "react"

const navData = [{
  name: "Me",
  route: "x",
}, {
  name: "Now",
  route: "x",
}, {
  name: "Blog",
  route: "x",
}]

const Navigation = () => {
  return (
    <div class="sidebar-navigation">
      {
        navData.map(function(nav){
          return (
            <div class="sidebar-link">
              <a href={nav.route}>
                {nav.name}
              </a>
            </div>
          )
        })
      }
    </div>
  )
}

export default Navigation;
