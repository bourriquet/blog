import * as React from "react"
import {getBlogPost} from "../../../data/blogPosts"

const postData = getBlogPost("867f4034-b8da-4bdc-a4e9-902c13b6f83e")

const PostContent = (props) => {
  return (
    <div className="standard-content">
      <p>
        Blog post not found.
      </p>
    </div>
  )
}

export default PostContent;
