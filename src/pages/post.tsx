import * as React from "react"
import Post from "../components/Post"
import Sidebar from "../components/sidebar/Sidebar"

import "../index.css"

const PostPage = (props) => {
  const [pageId, setPageId] = React.useState("None")

  React.useEffect(() => {
    if (props.id) {
      setPageId(props.id)
    }
  })

  return (
    <div className="columns">
       <div className="sidebar">
         <Sidebar />
       </div>
       <div className="content-container">
         <Post id={pageId}/>
       </div>
    </div>
  )
}

export default PostPage;
