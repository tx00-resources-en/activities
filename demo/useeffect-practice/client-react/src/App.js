import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home1'
import Create from './pages/Create'
import BlogDetails from './pages/BlogDetails'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
          <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/create" 
              element={<Create />} 
            />
            <Route 
              path="/blogs/:id" 
              element={ <BlogDetails />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;

