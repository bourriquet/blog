import * as React from "react"
import Me from "../components/Me"
import PageTemplate from "../components/templates/Page"

const MePage = () => {
  React.useEffect(() =>  {
    ReactGA.initialize("G-T9YV287WJS");
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <PageTemplate page={<Me />} />
  )
}

export default MePage
