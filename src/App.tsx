import OneDay from './OneDay'
import Layout from './Layout'
import Home from './Home';
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import FiveDays from './FiveDays';
import Search from './Search';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="OneDay" element={<OneDay />} />
            <Route path="FiveDays" element={<FiveDays />} />
            <Route path="Search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;