import * as React from "react"
import { Outlet, Route, Routes } from 'react-router-dom';

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
        <Route path="/" element={<Me/>} exact />
        <Route path="/blog" element={<Blog/>} exact />
        <Route path="/me" element={<Me/>} exact />
        <Route path="/now" element={<Now/>} exact />
       </Routes>

       <Outlet />
     </div>
  </div>
  )
}

export default App
