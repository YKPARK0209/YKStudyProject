import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AiFundamentals from './presentations/ai-fundamentals/index'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presentations/ai-fundamentals" element={<AiFundamentals />} />
    </Routes>
  )
}
