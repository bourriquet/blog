import * as React from "react"
import PostContent from "../../components/blog/posts/48427dad-dc2c-49e9-8c9e-b4a0de45785a"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

import {getBlogPost} from "../../data/blogPosts"

const postData = getBlogPost("48427dad-dc2c-49e9-8c9e-b4a0de45785a")

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
