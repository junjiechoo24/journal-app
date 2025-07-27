// src/JournalForm.jsx
import { useState } from 'react'; // Import useState
import { supabase } from './supabaseClient'; // Import Supabase
import './App.css';

function JournalForm() {
  // Step 1: Create a state variable for each textarea
  const [promptHappen, setPromptHappen] = useState('');
  const [promptWell, setPromptWell] = useState('');
  const [promptNotWell, setPromptNotWell] = useState('');
  const [promptBiggerPicture, setPromptBiggerPicture] = useState('');
  const [loading, setLoading] = useState(false);

  // This is our auto-growing textarea function
  const handleTextareaGrowth = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  // Step 2: Create the submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from('journal_entries') // Saving to the correct table
      .insert([
        {
          prompt_happen: promptHappen,
          prompt_well: promptWell,
          prompt_not_well: promptNotWell,
          prompt_bigger_picture: promptBiggerPicture,
        },
      ]);

    if (error) {
      console.error('Error saving journal entry:', error);
      alert('Error: Could not save your entry.');
    } else {
      alert('Your journal entry has been saved!');
      // Clear the form after saving
      setPromptHappen('');
      setPromptWell('');
      setPromptNotWell('');
      setPromptBiggerPicture('');
    }
    setLoading(false);
  };

  return (
    // Step 3: Connect everything to the form
    <form className="journal-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="prompt-happen">Something that happened:</label>
        <textarea
          id="prompt-happen"
          placeholder="A factual account of a notable event..."
          rows={3}
          value={promptHappen}
          onChange={(e) => setPromptHappen(e.target.value)}
          onInput={handleTextareaGrowth}
        />
      </div>

      <div className="form-group">
        <label htmlFor="prompt-well">Something you did well:</label>
        <textarea
          id="prompt-well"
          placeholder="A small victory or success..."
          rows={3}
          value={promptWell}
          onChange={(e) => setPromptWell(e.target.value)}
          onInput={handleTextareaGrowth}
        />
      </div>

      <div className="form-group">
        <label htmlFor="prompt-not-well">What did not go well:</label>
        <textarea
          id="prompt-not-well"
          placeholder="A challenge or area for improvement..."
          rows={3}
          value={promptNotWell}
          onChange={(e) => setPromptNotWell(e.target.value)}
          onInput={handleTextareaGrowth}
        />
      </div>

      <div className="form-group">
        <label htmlFor="prompt-bigger-picture">The bigger picture:</label>
        <textarea
          id="prompt-bigger-picture"
          placeholder="How does this fit into the larger narrative of your life?"
          rows={3}
          value={promptBiggerPicture}
          onChange={(e) => setPromptBiggerPicture(e.target.value)}
          onInput={handleTextareaGrowth}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save Entry'}
      </button>
    </form>
  );
}

export default JournalForm;