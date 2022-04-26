import * as React from "react"

const PostImageSingle = (props) => {
  return (
    <div class={`post-image-single post-image-single-${props.portrait ? "portrait" : "landscape"}`}>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <em>{props.caption}</em>
      </div>
    </div>
  )
}

export default PostImageSingle;
