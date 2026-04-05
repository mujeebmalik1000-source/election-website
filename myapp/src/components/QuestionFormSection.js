import React from "react";
import "./QuestionFormSection.css";

function QuestionFormSection() {
  return (
    <section className="question-section">
      <div className="container">

        <div className="question-title">
          <h2>Have Any Question?</h2>
          <p>
            It is a long established fact that a reader will be distracted <br/>
            content of a page when looking.
          </p>
        </div>

        <form className="question-form">

          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Your phone" />

            <select>
              <option>River Development</option>
              <option>Education</option>
              <option>Medical Help</option>
              <option>Donation</option>
            </select>
          </div>

          <textarea placeholder="Message"></textarea>

          <div className="btn-box">
            <button type="submit">Submit Now</button>
          </div>

        </form>

      </div>
    </section>
  );
}

export default QuestionFormSection;