import HomePage from './Tabs/homepage/homepage';
import DashBoard from './Tabs/dashboard/dashboard';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
