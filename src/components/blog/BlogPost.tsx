import * as React from "react"
import { Link } from "gatsby"

const BlogPost = (props) => {
  const url = "/post/" + props.postId

  return (
    <div className="blog-post-list" key={props.index}>
      <Link to={url}>
        <div className="content-box blog-post">
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
              <div className="blog-post-footer">
                <div className="blog-post-date">
                  {props.date}
                  {
                    props.date != props.datePublished &&
                     <> (published {props.datePublished}) </>
                  }
                </div>
                <div className="blog-post-reading-time">
                  {props.readingTime} read
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogPost;
