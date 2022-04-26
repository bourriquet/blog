import * as React from "react"
import PostContent from "../../components/blog/posts/f5547670-a3d8-4b32-84b5-c378dec42ff9"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

import {getBlogPost} from "../../data/blogPosts"

const postData = getBlogPost("f5547670-a3d8-4b32-84b5-c378dec42ff9")

const Post = () => {
  return (
    <PageTemplate page={
      <PostTemplate
        caption={postData.caption}
        content={<PostContent />}
        date={postData.date.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"})}
        datePublished={postData.datePublished.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"})}
        readingTime={postData.readingTime}
        title={postData.title}
      />
    }
    />
  )
}

export default Post;
