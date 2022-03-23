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
    })
      .then(response => response.json())
      .then(responseData => {
        setBlogPosts(responseData.results)
      })
  }, [])

  return (
    <div class="content-box">
      x
    </div>
  )
}

export default Blog;
