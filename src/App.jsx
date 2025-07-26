// src/App.jsx

import './App.css'
import JournalForm from './JournalForm' // Step 1: Import it

function App() {
  return (
    <>
      <h1>Journal App</h1>
      <p className="read-the-docs">
        Ready for your daily reflection?
      </p>
      
      <JournalForm /> {/* Step 2: Use it here */}
    </>
  )
}

export default App