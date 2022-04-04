import * as React from "react"
import NowPost from "./now/NowPost"
import March2022 from "./now/posts/2022-03"

const Now = () => {
  return (
    <div className="content">
      <div className="borderless-box box page-title" style={{textAlign: "center"}}>
        What I'm up to now...
      </div>
      <NowPost
        month="March 2022"
        lines={<March2022 />}
      />
      <div className="borderless-box box standard-content" style={{textAlign: "center"}}>
        This page is inspired
        by <a href="https://joetsoi.github.io/" target="_blank">Joe T</a>'s now
        page, which will lead you to another chain of "inspired
        by" <a href="https://nownownow.com/about" target="_blank">now pages</a>.
      </div>
    </div>
  )
}

export default Now;
