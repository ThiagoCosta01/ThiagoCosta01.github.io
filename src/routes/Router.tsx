import Home from '../pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import UnderConstruction from '../pages/UnderConstruction/UnderConstruction'

export default function Router() {
  return (
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/projects" element={<UnderConstruction />} />
        <Route path="/contact" element={<UnderConstruction />} />
        <Route path="/certifications" element={<UnderConstruction />} />
      </Routes>
  )
}