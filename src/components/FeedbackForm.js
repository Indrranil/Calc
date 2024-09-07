// src/components/FeedbackForm.js
import React, { useState } from "react";
import "./FeedbackForm.css"; // Optional: for styling

function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedFeedback(feedback);
    setFeedback({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="feedback-form">
      <h2>User Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={feedback.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedFeedback && (
        <div className="submitted-feedback">
          <h2>Submitted Feedback</h2>
          <p>
            <strong>Name:</strong> {submittedFeedback.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedFeedback.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedFeedback.message}
          </p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
