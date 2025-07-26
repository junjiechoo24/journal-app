// src/JournalForm.jsx

import './App.css' // We can borrow the pretty styles we already made

function JournalForm() {
  return (
    <form className="journal-form">
      <div className="form-group">
        <label htmlFor="prompt-happen">Something that happened:</label>
        <textarea
          id="prompt-happen"
          placeholder="A factual account of a notable event..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="prompt-well">Something you did well:</label>
        <textarea
          id="prompt-well"
          placeholder="A small victory or success..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="prompt-not-well">What did not go well:</label>
        <textarea
          id="prompt-not-well"
          placeholder="A challenge or area for improvement..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="prompt-bigger-picture">The bigger picture:</label>
        <textarea
          id="prompt-bigger-picture"
          placeholder="How does this fit into the larger narrative of your life?"
        />
      </div>

      <button type="submit">Save Entry</button>
    </form>
  )
}

export default JournalForm