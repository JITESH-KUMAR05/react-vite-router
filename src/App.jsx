import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Route , Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Index from './pages/Index.jsx'
import About from './pages/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        
      

      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/about" element={<About/>}/>  
       </Routes>
    </div>
  )
}

export default App;
