// src/FlourishingScalePage.jsx
import { useState } from 'react';
import { supabase } from './supabaseClient';
import LikertQuestion from './LikertQuestion';
import './App.css'; // Reusing some global styles

function FlourishingScalePage() {
  const questions = [
    "I lead a purposeful and meaningful life.",
    "My social relationships are supportive and rewarding.",
    "I am engaged and interested in my daily activities.",
    "I actively contribute to the happiness and well-being of others.",
    "I am competent and capable in the activities that are important to me.",
    "I am a good person and live a good life.",
    "I am optimistic about my future.",
    "People respect me."
  ];

  // Initialize the state for all 8 questions to null
  const [scores, setScores] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, q8: null,
  });
  const [loading, setLoading] = useState(false);

  // This function updates the score for a specific question
  const handleScoreChange = (questionIndex, newScore) => {
    setScores(prevScores => ({
      ...prevScores,
      [`q${questionIndex + 1}`]: newScore,
    }));
  };

  // This function runs when the user clicks the submit button
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any of the scores are still null
    if (Object.values(scores).some(score => score === null)) {
      alert('Please answer all 8 questions before submitting.');
      return; // Stop the function if the form is incomplete
    }

    setLoading(true);

    const { data, error } = await supabase
      .from('weekly_fs_scores') // Saving to the correct table
      .insert([scores]); // Supabase can take the whole object if keys match columns

    if (error) {
      console.error('Error saving weekly score:', error);
      alert('Error: Could not save your score. Check the console.');
    } else {
      alert('Your weekly flourishing score has been saved!');
      // Optionally reset the form
      setScores({
        q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, q8: null,
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="App-header">Flourishing Scale (FS)</h1>
      <p className="read-the-docs">
        Below are 8 statements with which you may agree or disagree. Using the scale below, indicate your agreement with each item.
      </p>
      
      <form className="journal-form" onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <LikertQuestion
            key={index}
            questionNumber={index + 1}
            questionText={q}
            value={scores[`q${index + 1}`]}
            onValueChange={(newScore) => handleScoreChange(index, newScore)}
          />
        ))}
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Submit Weekly Score'}
        </button>
      </form>
    </div>
  );
}

export default FlourishingScalePage;