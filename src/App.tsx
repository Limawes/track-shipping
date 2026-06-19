import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
