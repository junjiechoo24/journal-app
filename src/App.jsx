// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { supabase } from './supabaseClient' // Import supabase
import Auth from './Auth'
import JournalForm from './JournalForm'
import DfiPage from './DfiPage'
import FlourishingScalePage from './FlourishingScalePage'
import './App.css'

function App() {
  const { session } = useAuth();

  // The function to handle logging out
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error logging out:', error)
    }
  }

  if (!session) {
    return <Auth />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="main-nav">
          <Link to="/">Journal Entry</Link>
          <Link to="/daily-questions">Daily Questions</Link>
          <Link to="/weekly-flourishing">Weekly Flourishing</Link>
          
          {/* The new button with its onClick handler */}
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
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