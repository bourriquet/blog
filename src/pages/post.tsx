import * as React from "react"
import Post from "../components/Post"
import Sidebar from "../components/sidebar/Sidebar"

import "../index.css"

const PostPage = (props) => {
  return (
    <div className="columns">
     <div className="sidebar">
       <Sidebar />
     </div>
     <div className="content-container">
       <Post
        id={props.id}
       />
     </div>
  </div>
  )
}

export default PostPage;
