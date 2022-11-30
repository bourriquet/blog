import * as React from "react"
import { Link } from "gatsby"

import {getBlogPost} from "../../data/blogPosts"

const formatDate = (date) => {
  return date.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"})
}

const PostTemplate = (props) => {
  const postData = getBlogPost(props.postId)
  const nextPostData = postData.nextPostId !== undefined ? getBlogPost(postData.nextPostId) : null
  const previousPostData = postData.previousPostId !== undefined ? getBlogPost(postData.previousPostId) : null

  const hasNextPost = () => {
    return nextPostData !== null
  }
  const hasPreviousPost = () => {
    return previousPostData !== null
  }

  return (
     <div className="content">
       <div className="content-box box">
         <div className="post-title">
           {postData.title}
         </div>
         <div className="post-caption">
           {postData.caption}
         </div>
         <div className="post-date">
           {formatDate(postData.date)}
           {
             postData.date.getTime() != postData.datePublished.getTime() &&
              <> (published {formatDate(postData.datePublished)}) </>
           }
         </div>
         <div className="post-reading-time">
           {postData.readingTime} read
         </div>
         <hr />
         <div className="standard-content">
           {props.content}
           {(hasNextPost() || hasPreviousPost()) &&
            <>
              <hr />
              <span>
                {hasPreviousPost() &&
                  <p><em>Previous post: <Link to={"/post/" + previousPostData.id}>{previousPostData.title}</Link></em></p>
                }
              </span>
              <span className="next-post-box">
                {hasNextPost() &&
                  <p><em>Next post: <Link to={"/post/" + nextPostData.id}>{nextPostData.title}</Link></em></p>
                }
              </span>
            </>
          }
        </div>
       </div>
     </div>
  )
}

export default PostTemplate;
