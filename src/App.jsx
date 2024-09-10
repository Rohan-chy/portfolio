import Header from "./components/Header"
import About from "./pages/About"

import { BrowserRouter,Route,Routes } from "react-router-dom"
import Work from "./pages/Work"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>   
    </BrowserRouter>
  )
}

export default App
