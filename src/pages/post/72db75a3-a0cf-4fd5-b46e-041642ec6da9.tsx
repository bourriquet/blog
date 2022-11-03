import * as React from "react"
import PostContent from "../../components/blog/posts/72db75a3-a0cf-4fd5-b46e-041642ec6da9"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

import {getBlogPost} from "../../data/blogPosts"

const postData = getBlogPost("72db75a3-a0cf-4fd5-b46e-041642ec6da9")

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
