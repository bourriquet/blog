import * as React from "react"
import { Link } from "gatsby"

import {getBlogPost} from "../../data/blogPosts"

const formatDate = (date) => {
  return date.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"})
}

const PostTemplate = (props) => {
  const postData = getBlogPost(props.postId)

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
         {props.content}
       </div>
     </div>
  )
}

export default PostTemplate;
