import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Education from './src/Education'
import Project from './src/Project'
import Counter from './src/counter'
import Service from './src/Service'
import Layout from './components/Layout'


const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Service />} />
        <Route path="/counter" element={<Counter />} />
      
      </Routes>
    </div>
  )
}

export default MainRouter