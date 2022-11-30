import * as React from "react"
import PostContent from "../../components/blog/posts/87b88cb7-3d1e-4fb5-aef7-9d30ffa39347"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

const Post = () => {
  return (
    <PageTemplate page={
      <PostTemplate
        content={<PostContent />}
        postId="87b88cb7-3d1e-4fb5-aef7-9d30ffa39347"
      />
    }
    />
  )
}

export default Post;
