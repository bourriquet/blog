import * as React from "react"
import PostContent from "../../components/blog/posts/867f4034-b8da-4bdc-a4e9-902c13b6f83e"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

const Post = () => {
  return (
    <PageTemplate page={
      <PostTemplate
        content={<PostContent />}
        postId="867f4034-b8da-4bdc-a4e9-902c13b6f83e"
      />
    }
    />
  )
}

export default Post;
