// Code: Main App component
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  )
}