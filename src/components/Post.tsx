import * as React from "react"
import {getBlock, getBlockChildren} from "../api/client"

const Post = (props) => {
  const [postPage, setPostPage] = React.useState({})
  const [postContent, setPostContent] = React.useState([])

  React.useEffect(() => {
    getBlock(props.id).then(responseData => {
      console.log(responseData)

      setPostPage({
        title: responseData.properties.Title.title[0].plain_text
      })
    })

    getBlockChildren(props.id).then(responseData => {
      console.log(responseData)

      setPostContent([])
    })
  }, [])

  return (
    <div className="content">
      <div className="content-box box">
        {postPage.title}
      </div>
    </div>
  )
}

export default Post;
