import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AiFundamentals from './presentations/ai-fundamentals/index'
import NipaGovAxConsulting from './presentations/nipa-gov-ax-consulting/index'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presentations/ai-fundamentals" element={<AiFundamentals />} />
      <Route path="/presentations/nipa-gov-ax-consulting" element={<NipaGovAxConsulting />} />
    </Routes>
  )
}
