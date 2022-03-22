import * as React from "react"
import { Route, Routes } from 'react-router-dom';

import Blog from "../components/Blog"
import Me from "../components/Me"
import Now from "../components/Now"
import Sidebar from "../components/sidebar/Sidebar"


const App = () => {
  return (
    <div class="columns">
     <div class="sidebar">
       <Sidebar />
     </div>
     <div class="content">
       <Routes>
        <Route path="/" component={Me} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/me" component={Me} />
        <Route path="/now" component={Now} />
       </Routes>
     </div>
  </div>
  )
}

export default App
