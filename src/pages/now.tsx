import * as React from "react"
<<<<<<< HEAD
import ReactGA from "react-ga"
import "../index.css"

=======
>>>>>>> 2b13d6c (Tidy up imports)
import Now from "../components/Now"
import PageTemplate from "../components/templates/Page"

const NowPage = () => {
  React.useEffect(() =>  {
    ReactGA.initialize("G-T9YV287WJS");
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <PageTemplate page={<Now />} />
  )
}

export default NowPage
