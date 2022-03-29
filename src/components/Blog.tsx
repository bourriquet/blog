import * as React from "react"
import {blogPosts} from "../data/blogPosts"

import BlogPost from "./blog/BlogPost"


const Blog = () => {
  return (
    <div className="content">
      {
        blogPosts().map(function(post, index){
          console.log(post)
          return (
            <BlogPost
              key={index}
              index={index}
              caption={post.caption}
              date={post.date}
              post_id={post.id}
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
