import * as React from "react"
<<<<<<< HEAD
import ReactGA from "react-ga"
import "../index.css"

=======
>>>>>>> 2b13d6c (Tidy up imports)
import Now from "../components/Now"
import Sidebar from "../components/sidebar/Sidebar"

import "../index.css"

const NowPage = () => {
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
       <Now />
     </div>
  </div>
  )
}

export default NowPage
