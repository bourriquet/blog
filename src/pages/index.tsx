import * as React from "react"
import ReactGA from 'react-ga';
import App from "./App"

import "../index.css"

ReactGA.initialize("G-T9YV287WJS");

const IndexPage = () => {
  return (
    <main>
      <App />
    </main>
  )
}

export default IndexPage
