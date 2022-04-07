import * as React from "react"
import PostContent from "../../components/blog/posts/867f4034-b8da-4bdc-a4e9-902c13b6f83e"
import PostTemplate from "../../components/templates/Post"

import {getBlogPost} from "../../data/blogPosts"

const postData = getBlogPost("867f4034-b8da-4bdc-a4e9-902c13b6f83e")

const Post = () => {
  return (
    <PostTemplate
      content={<PostContent />}
      title={postData.title}
    />
  )
}

export default Post;
