import * as React from "react"
import Now from "../components/Now"
import PageTemplate from "../components/templates/Page"

const NowPage = () => {
  return (
    <PageTemplate page={<Now />} />
  )
}

export default NowPage
