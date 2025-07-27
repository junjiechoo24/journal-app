// src/LikertQuestion.jsx
import './LikertQuestion.css'

function LikertQuestion({ questionNumber, questionText, value, onValueChange }) {
  const scalePoints = [
    { label: 'Strongly disagree', value: 1 },
    { label: 'Disagree', value: 2 },
    { label: 'Slightly disagree', value: 3 },
    { label: 'Mixed or neither', value: 4 },
    { label: 'Slightly agree', value: 5 },
    { label: 'Agree', value: 6 },
    { label: 'Strongly agree', value: 7 },
  ];

  return (
    <div className="likert-question">
      <div className="likert-statement">
        <span className="question-number">{questionNumber}.</span>
        <p>{questionText}</p>
      </div>
      <div className="likert-buttons">
        {scalePoints.map((point) => (
          <button 
            key={point.value} 
            type="button" 
            title={point.label}
            className={value === point.value ? 'selected' : ''}
            onClick={() => onValueChange(point.value)}
          >
            {point.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LikertQuestion;