import * as React from "react"
import Sidebar from "../../components/sidebar/Sidebar"

const PostTemplate = (props) => {
  return (
    <div className="columns">
       <div className="sidebar">
         <Sidebar />
       </div>
       <div className="content-container">
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
             </div>
             <div className="post-reading-time">
               {props.readingTime} read
             </div>
             <hr />
             {props.content}
           </div>
         </div>
       </div>
    </div>
  )
}

export default PostTemplate;
