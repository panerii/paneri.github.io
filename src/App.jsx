import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Family = lazy(() => import('./pages/Family'))
const Gallary = lazy(() => import('./pages/Gallary'))

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={'/'} exact element={<Home />} />
          <Route path={'/about'} exact element={<About />} />
          <Route path={'/family'} exact element={<Family />} />
          <Route path={'/gallary'} exact element={<Gallary />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
