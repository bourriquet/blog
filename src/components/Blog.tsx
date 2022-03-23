import * as React from "react"


const Blog = () => {
  const [blogPosts, setBlogPosts] = React.useState([])

  React.useEffect(() => {
    fetch(`https://blooming-peak-64334.herokuapp.com/https://api.notion.com/v1/databases/8e5e6b0aa3144af3bb45fbedf719979a/query`, {
      method: "POST",
      mode: 'cors',
      headers: {
        "Notion-Version": "2022-02-22",
        "Authorization": "Bearer secret_bMVein24eDYAwBss2Np3XoZEA0XlOc1rFZM8dqiKn7F",
      },
      body: JSON.stringify({
        "sorts": [{
          "property": "Title",
          "direction": "descending"
        }],
        "page_size": 2,
      })
  })
      .then(response => response.json())
      .then(responseData => {
        let pages = []
        responseData.results.map(function(result){
          console.log(result)
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
    <div>
      {
        blogPosts.map(function(post){
          return (
            <div class="blog-post">
              <div class="blog-post-image">
                <div>
                  <img src={post.photo} width="300px" height="225px" />
                </div>
              </div>
              <div class="blog-post-details">
                <div>
                  <div class="blog-post-title">
                    {post.title}
                  </div>
                  <div class="blog-post-caption">
                    {post.caption}
                  </div>
                </div>
                <div>
                  <div class="blog-post-date">
                    {post.date}
                  </div>
                  <div class="blog-post-location">
                    {post.location}
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blog;
