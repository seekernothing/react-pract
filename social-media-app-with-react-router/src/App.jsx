import React from 'react'

import LandingPage from './pages/LandingPage'
import NotificationPage from './pages/NotificationPage'
import UsersPage from './pages/UsersPage'

import "./App.css"

import { Routes,Route,Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav className="nav">
        <h1 className="h1">GenZ</h1>
        <div className="linkdiv">
          <button className="btn">
            {" "}
            <Link className="link" to="/">
              Posts
            </Link>
          </button>
          <button className="btn">
            <Link className="link" to="/users">
              Users
            </Link>
          </button>
          <button className="btn">
            <Link className="link" to="/notifications">
              Notification
            </Link>
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App