
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar1 from './Components/Navbar1'
import AweSuite from './Components/AweSuite'
import Footer from './Components/Footer'
import Aih from './Components/Aih'
import Contact from './Components/Contact'
import About from './Components/About'
import FrontPage from './Components/FrontPage'
import Bsdesign from './Components/Bsdesign'
import Bundle from './Components/Bundle'


function App() {


  return (
    <>
   <BrowserRouter>

   <Routes>
    <Route path='/' element={<FrontPage />}></Route>
    <Route path='/awesuite' element={<AweSuite />}></Route>
    <Route path='/bsdesign' element={<Bsdesign/>}></Route>
    <Route path='/bundle' element={<Bundle/>}></Route>
    <Route path='/aih' element={<Aih />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/about' element={<About />}></Route>
   </Routes>

   </BrowserRouter>
    </>
  )
}

export default App
