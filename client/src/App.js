// import Landing from './pages/Landing'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Dashboard, Landing, Error, Register } from './pages/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={Dashboard} />
        <Route path="/register" element={Register} />
        <Route path="/landing" element={Landing} />
        <Route path="*" element={Error} />
      </Routes>
      <div>hhhh</div>
    </BrowserRouter>
  );
}

export default App;
