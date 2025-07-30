import React, { useState } from 'react';
import './Ask.scss';

const Ask = () => {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="ask-page">
      <h2>Ask Something</h2>
      <p className="ask-desc">Have a question? Ask us anything and we’ll get back to you soon!</p>
      {submitted ? (
        <div className="ask-success">Thank you for your question! We will respond soon.</div>
      ) : (
        <form className="ask-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Type your question here..."
            value={question}
            onChange={e => setQuestion(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
export default Ask;
