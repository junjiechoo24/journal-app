// src/FlourishingScalePage.jsx
import { useState } from 'react'; // Import useState
import { supabase } from './supabaseClient'; // Import Supabase
import LikertQuestion from './LikertQuestion';

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

  // Step 1: Use a single state object to hold all 8 answers
  const [scores, setScores] = useState({
    q1: 4, q2: 4, q3: 4, q4: 4, q5: 4, q6: 4, q7: 4, q8: 4,
  });
  const [loading, setLoading] = useState(false);

  // A function to update a single question's score
  const handleScoreChange = (questionIndex, newScore) => {
    setScores(prevScores => ({
      ...prevScores,
      [`q${questionIndex + 1}`]: newScore,
    }));
  };

  // Step 2: Create the submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from('weekly_fs_scores') // Saving to the correct table
      .insert([scores]); // We can insert the whole scores object directly!

    if (error) {
      console.error('Error saving weekly score:', error);
      alert('Error: Could not save your score.');
    } else {
      alert('Your weekly flourishing score has been saved!');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="App-header">Flourishing Scale (FS)</h1>
      <p className="read-the-docs">
        Indicate your agreement with each item below (1=Strongly Disagree, 7=Strongly Agree).
      </p>
      {/* Step 3: Connect the handler to the form */}
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