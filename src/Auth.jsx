// src/Auth.jsx
import { useState } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      alert(error.error_description || error.message)
    }
    setLoading(false)
  }

  return (
    <div className="auth-container">
      <h1 className="App-header">Journal App</h1>
      <p className="read-the-docs">Sign in to continue</p>
      <form className="journal-form" onSubmit={handleLogin}>
        <input
          className="auth-input"
          type="email"
          placeholder="Your email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Your password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? <span>Loading...</span> : <span>Log In</span>}
        </button>
      </form>
    </div>
  )
}