// src/DfiPage.jsx
import { useState } from 'react'
import { supabase } from './supabaseClient'
import ScaleQuestion from './ScaleQuestion'

function DfiPage() {
  // --- Change 1: Rename the state variables to match your database ---
  const [satisfaction, setSatisfaction] = useState(null);
  const [meaning, setMeaning] = useState(null);         // Was 'worthwhile'
  const [connection, setConnection] = useState(null);
  const [authenticity, setAuthenticity] = useState(null); // Was 'alignment'

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any value is still null
    if (satisfaction === null || meaning === null || connection === null || authenticity === null) {
        alert('Please answer all questions before saving.');
        return; // Stop the function here
    }

    const { data, error } = await supabase
      .from('dfi_entries')
      .insert([
        // --- Change 2: Update the object keys to match your database ---
        { 
          satisfaction: satisfaction, 
          meaning: meaning,             // Was 'worthwhile'
          connection: connection, 
          authenticity: authenticity,   // Was 'alignment'
        },
      ]);
    
    if (error) {
      console.error('Error saving data:', error);
    } else {
      alert('Your scores have been saved!');
    }
  };

  return (
    <div>
      <h1 className="App-header">Daily Flourishing</h1>
      <p className="read-the-docs">
        Reflecting on your day today, please answer the following:
      </p>

      <form className="journal-form" onSubmit={handleSubmit}>
        <ScaleQuestion 
          questionText="Reflecting on your day today, how satisfied were you?"
          value={satisfaction}
          onValueChange={setSatisfaction}
        />
        <ScaleQuestion 
          questionText="Reflecting on your day today, to what extent did your activities feel worthwhile?"
          value={meaning}                 // Pass the correct state
          onValueChange={setMeaning}            // Pass the correct setter
        />
        <ScaleQuestion 
          questionText="Reflecting on your day today, how would you rate the quality of your social connections?"
          value={connection}
          onValueChange={setConnection}
        />
        <ScaleQuestion 
          questionText="Reflecting on your day today, to what extent did your actions align with your personal values?"
          value={authenticity}            // Pass the correct state
          onValueChange={setAuthenticity}       // Pass the correct setter
        />
        
        <button type="submit">Save Daily Scores</button>
      </form>
    </div>
  );
}

export default DfiPage;