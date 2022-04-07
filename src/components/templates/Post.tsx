import * as React from "react"
import PostContent from "../../components/blog/posts/867f4034-b8da-4bdc-a4e9-902c13b6f83e"
import Sidebar from "../../components/sidebar/Sidebar"

import "../../index.css"

const PostTemplate = (props) => {
  return (
    <div className="columns">
       <div className="sidebar">
         <Sidebar />
       </div>
       <div className="content-container">
         <div className="content">
           <div className="content-box box">
             {props.content}
           </div>
         </div>
       </div>
    </div>
  )
}

export default PostTemplate;
