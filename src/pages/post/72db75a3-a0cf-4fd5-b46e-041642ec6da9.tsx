import * as React from "react"
import PostContent from "../../components/blog/posts/72db75a3-a0cf-4fd5-b46e-041642ec6da9"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

const Post = () => {
  return (
    <PageTemplate page={
      <PostTemplate
        content={<PostContent />}
        postId="72db75a3-a0cf-4fd5-b46e-041642ec6da9"
      />
    }
    />
  )
}

export default Post;
