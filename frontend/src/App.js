import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>   {/* surrounds everything that needs to use the routing system */}
        <Navbar />
        <div className="pages">
          <Routes>
            {/* element Home is rendered for root path */}
            <Route      
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;