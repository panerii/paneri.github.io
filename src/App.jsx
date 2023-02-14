import { Routes, Route } from 'react-router-dom'
import Gallary from './pages/Gallary'
import Family from './pages/Family'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path={'/'} exact element={<Home />} />
        <Route path={'/about'} exact element={<About />} />
        <Route path={'/family'} exact element={<Family />} />
        <Route path={'/gallary'} exact element={<Gallary />} />
      </Routes>
    </>
  )
}

export default App
