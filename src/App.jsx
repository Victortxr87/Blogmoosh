import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Featured from './pages/Featured'
import Casino from './pages/Casino'
import Tutorial from './pages/Tutorial'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <div className="min-h-screen bg-[#13105B] bg-website bg-cover bg-no-repeat">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App