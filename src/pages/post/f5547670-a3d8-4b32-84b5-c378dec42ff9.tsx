import * as React from "react"
import PostContent from "../../components/blog/posts/f5547670-a3d8-4b32-84b5-c378dec42ff9"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

const Post = () => {
  return (
    <PageTemplate page={
      <PostTemplate
        content={<PostContent />}
        postId="f5547670-a3d8-4b32-84b5-c378dec42ff9"
      />
    }
    />
  )
}

export default Post;
