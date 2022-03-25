import * as React from "react"

const BlogPost = (props) => {
  return (
    <div className="content-box blog-post" key={props.index}>
      <div className="blog-post-image">
        <div>
          <img src={props.photo} width="300px" height="225px" />
        </div>
      </div>
      <div className="blog-post-details">
        <div>
          <div className="blog-post-title">
            {props.title}
          </div>
          <div className="blog-post-caption">
            {props.caption}
          </div>
        </div>
        <div>
          <div className="blog-post-date">
            {props.date}
          </div>
          <div className="blog-post-location">
            {props.location}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost;
