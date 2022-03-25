const notionVersion = "2022-02-22"
const apiToken = "Bearer secret_bMVein24eDYAwBss2Np3XoZEA0XlOc1rFZM8dqiKn7F"
const apiBaseUrl = "https://blooming-peak-64334.herokuapp.com/https://api.notion.com/v1/"
const apiBlogPostsPath = "databases/8e5e6b0aa3144af3bb45fbedf719979a/query"

function constructRequest(method) {
  return {
    method: method,
    mode: 'cors',
    headers: {
      "Notion-Version": notionVersion,
      "Authorization": apiToken,
    }
  }
}

function getAllBlogPosts() {
  const url = apiBaseUrl + apiBlogPostsPath;

  return fetch(url, constructRequest("POST")).then(r => r.json())
}

export {getAllBlogPosts};
