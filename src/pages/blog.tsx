import * as React from "react"
import Blog from "../components/Blog"
import PageTemplate from "../components/templates/Page"

const BlogPage = () => {
  React.useEffect(() =>  {
    ReactGA.initialize("G-T9YV287WJS");
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <PageTemplate page={<Blog />} />
  )
}

export default BlogPage
