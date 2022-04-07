import * as React from "react"
import ReactGA from "react-ga"
import PostContent from "../../components/blog/posts/867f4034-b8da-4bdc-a4e9-902c13b6f83e"
import PageTemplate from "../../components/templates/Page"
import PostTemplate from "../../components/templates/Post"

import {getBlogPost} from "../../data/blogPosts"

const postData = getBlogPost("867f4034-b8da-4bdc-a4e9-902c13b6f83e")

const Post = () => {
  React.useEffect(() =>  {
    ReactGA.initialize("G-T9YV287WJS");
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <PageTemplate page={
      <PostTemplate
        caption={postData.caption}
        content={<PostContent />}
        date={postData.date.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"})}
        readingTime={postData.readingTime}
        title={postData.title}
      />
    }
    />
  )
}

export default Post;
