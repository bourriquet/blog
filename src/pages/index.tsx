import * as React from "react"
import { BrowserRouter } from "react-router-dom";
import "../index.css"

import App from "./App"

const IndexPage = () => {
  return (
    <main>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </main>
  )
}

export default IndexPage
