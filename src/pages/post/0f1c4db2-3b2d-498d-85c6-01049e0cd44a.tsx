import * as React from "react"
import PostContent from "../../components/blog/posts/0f1c4db2-3b2d-498d-85c6-01049e0cd44a"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

const Post = () => {
  return (
    <PageTemplate page={
      <PostTemplate
        content={<PostContent />}
        postId="0f1c4db2-3b2d-498d-85c6-01049e0cd44a"
      />
    }
    />
  )
}

export default Post;
