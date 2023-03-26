import * as React from "react"
import Posts from "../components/Posts"
import PageTemplate from "../components/templates/Page"

const PostsPage = () => {
  return (
    <PageTemplate page={<Posts />} />
  )
}

export default PostsPage
