// src/ScaleQuestion.jsx
import './ScaleQuestion.css'

function ScaleQuestion({ questionText, value, onValueChange }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="scale-question">
      <label>{questionText}</label>
      <div className="scale-buttons">
        {numbers.map((number) => (
          <button 
            key={number} 
            type="button"
            className={value === number ? 'selected' : ''}
            // --- THIS IS THE FIXED LINE ---
            onClick={() => onValueChange(number)} 
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ScaleQuestion;