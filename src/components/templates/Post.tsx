import * as React from "react"

const PostTemplate = (props) => {
  return (
     <div className="content">
       <div className="content-box box">
         <div className="post-title">
           {props.title}
         </div>
         <div className="post-caption">
           {props.caption}
         </div>
         <div className="post-date">
           {props.date}
           {
             props.date != props.datePublished &&
              <> (published {props.datePublished}) </>
           }
         </div>
         <div className="post-reading-time">
           {props.readingTime} read
         </div>
         <hr />
         {props.content}
       </div>
     </div>
  )
}

export default PostTemplate;
