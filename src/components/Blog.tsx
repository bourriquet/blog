import * as React from "react"
import {blogPosts} from "../data/blogPosts"

import BlogPost from "./blog/BlogPost"


const Blog = () => {
  return (
    <div className="content">
      {
        blogPosts().map(function(post, index){
          const dateString = post.date.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"})
          return (
            <BlogPost
              key={index}
              index={index}
              caption={post.caption}
              date={dateString}
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
