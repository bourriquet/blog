import * as React from "react"
import PostContent from "../../components/blog/posts/48427dad-dc2c-49e9-8c9e-b4a0de45785a"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

const Post = () => {
  return (
    <PageTemplate page={
      <PostTemplate
        content={<PostContent />}
        postId="48427dad-dc2c-49e9-8c9e-b4a0de45785a"
      />
    }
    />
  )
}

export default Post;
