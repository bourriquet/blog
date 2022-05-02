import * as React from "react"

const NowPost = (props) => {
  return (
    <div className="content-box box">
      <div className="blog-post-title">
        <u>{props.month}</u>
      </div>
      <div className="standard-content now-lines">
        {props.lines}
      </div>
    </div>
  )
}

export default NowPost;
