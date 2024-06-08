import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Layout from './Components/Layout'

function App()  {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="about"  element={<About/>}/>
      <Route path="contact"  element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

)
}

export default App
