import * as React from "react"

const Post = (props) => {
  const Component = require("../components/blog/posts/" + props.id).default
  return (
    <div className="content">
      <div className="content-box box">
        <Component />
      </div>
    </div>
  )
}

export default Post;
