const getBlogPost = (id) => blogPosts().filter(post => post.id == id)[0]

const blogPosts = () => [{
  id: "867f4034-b8da-4bdc-a4e9-902c13b6f83e",
  date: new Date(2022, 3, 6),
  datePublished: new Date(2022, 3, 6),
  photo: "https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/867f4034-b8da-4bdc-a4e9-902c13b6f83e_cover",
  title: "Kicking off my Rebel Badge journey",
  caption: "How many badges can I tick off?",
  tags: ["rebel_badge_club"],
  location: "London, UK",
  readingTime: "3 min",
}, {
  id: "72db75a3-a0cf-4fd5-b46e-041642ec6da9",
  date: new Date(2021, 7, 8),
  datePublished: new Date(2022, 10, 3),
  photo: "https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/72db75a3-a0cf-4fd5-b46e-041642ec6da9_cover",
  title: "Preparing for LEJOG",
  caption: "1,000 miles across the country on two wheels",
  tags: ["lejog", "cycling"],
  location: "London, UK",
  readingTime: "14 min",
},{
  id: "f5547670-a3d8-4b32-84b5-c378dec42ff9",
  date: new Date(2013, 7, 20),
  datePublished: new Date(2022, 3, 26),
  photo: "https://lauren-anders-blog.s3.eu-west-2.amazonaws.com/f5547670-a3d8-4b32-84b5-c378dec42ff9_cover",
  title: "Destination Utrecht",
  caption: "Twelve days until my Erasmus year begins",
  tags: ["erasmus", "year_abroad"],
  location: "Great Malvern, UK",
  readingTime: "4 min",
}]

export {blogPosts, getBlogPost};
