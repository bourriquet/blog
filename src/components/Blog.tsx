import * as React from "react"
import {getAllBlogPosts} from "../api/client"

import BlogPost from "./blog/BlogPost"


const Blog = () => {
  const [blogPosts, setBlogPosts] = React.useState([])

  React.useEffect(() => {
    getAllBlogPosts().then(responseData => {
      let pages = []
      responseData.results.map(function(result){
        let page = {}
        page.title = result.properties.Title.title[0].plain_text
        page.date = result.properties.Date.date.start
        page.location = result.properties.Location.rich_text[0].plain_text
        page.caption = result.properties.Caption.rich_text[0].plain_text
        page.photo = result.properties.Image.files[0].file.url
        pages.push(page)
      })

      setBlogPosts(pages)
    })
  }, [])

  return (
    <div className="content">
      {
        blogPosts.map(function(post, index){
          return (
            <BlogPost
              index={index}
              caption={post.caption}
              date={post.date}
              location={post.location}
              photo={post.photo}
              title={post.title}
            />
          )
        })
      }
    </div>
  )
}

export default Blog;
