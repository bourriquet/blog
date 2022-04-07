import * as React from "react"
import Blog from "../components/Blog"
import PageTemplate from "../components/templates/Page"

const BlogPage = () => {
  return (
    <PageTemplate page={<Blog />} />
  )
}

export default BlogPage
