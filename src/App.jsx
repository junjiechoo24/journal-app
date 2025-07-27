// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useAuth } from './AuthContext' // Import our new hook
import Auth from './Auth' // Import the login page
import JournalForm from './JournalForm'
import DfiPage from './DfiPage'
import FlourishingScalePage from './FlourishingScalePage'
import './App.css'

function App() {
  const { session } = useAuth(); // Get the session info

  // The Gatekeeper logic
  if (!session) {
    return <Auth />; // If no session, show the login page
  }

  // If there IS a session, show the main app
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="main-nav">
          <Link to="/">Journal Entry</Link>
          <Link to="/daily-questions">Daily Questions</Link>
          <Link to="/weekly-flourishing">Weekly Flourishing</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<JournalPage />} />
            <Route path="/daily-questions" element={<DfiPage />} />
            <Route path="/weekly-flourishing" element={<FlourishingScalePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function JournalPage() {
  return (
    <>
      <h1>Journal App</h1>
      <p className="read-the-docs">Ready for your daily reflection?</p>
      <JournalForm />
    </>
  );
}

export default App;