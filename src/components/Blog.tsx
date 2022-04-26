import * as React from "react"
import BlogPost from "./blog/BlogPost"
import {blogPosts} from "../data/blogPosts"

const Blog = () => {
  return (
    <div className="content">
      {
        blogPosts().map(function(post, index){
          const dateString = post.date.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"})
          const datePublishedString = post.datePublished.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"})
          return (
            <BlogPost
              key={index}
              index={index}
              caption={post.caption}
              date={dateString}
              datePublished={datePublishedString}
              postId={post.id}
              location={post.location}
              photo={post.photo}
              readingTime={post.readingTime}
              title={post.title}
            />
          )
        })
      }
    </div>
  )
}

export default Blog;
