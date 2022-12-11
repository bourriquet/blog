import * as React from "react"
import PostContent from "../../components/blog/posts/ea65a12f-c8af-45b4-9ba3-63210436f397"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

const Post = () => {
  return (
    <PageTemplate page={
      <PostTemplate
        content={<PostContent />}
        postId="ea65a12f-c8af-45b4-9ba3-63210436f397"
      />
    }
    />
  )
}

export default Post;
