import React from "react";
import "./BlogSection.css";

import blog1 from "../images/img-2.jpeg";
import blog2 from "../images/6.jpg .jpeg";
import blog3 from "../images/1.static.jpg";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <span className="blog-subtitle">— Blog Post —</span>
        <h2>Awesome Blog Post & Article.</h2>
      </div>

      <div className="blog-container">
        
        {/* Card 1 */}
        <div className="blog-card">
          <div className="blog-image">
            <img src={blog1} alt="blog" />
            <div className="date-box">
              <h3>28</h3>
              <span>AUGUST</span>
            </div>
          </div>
          <div className="blog-content">
            <h3>Letraset Sheets Passage And Recently.</h3>
            <p>
              Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.
            </p>
            <button>READ MORE</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="blog-card">
          <div className="blog-image">
            <img src={blog2} alt="blog" />
            <div className="date-box">
              <h3>25</h3>
              <span>MARCH</span>
            </div>
          </div>
          <div className="blog-content">
            <h3>Politics Is Why We Can't Have Nice Things.</h3>
            <p>
              Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.
            </p>
            <button>READ MORE</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="blog-card">
          <div className="blog-image">
            <img src={blog3} alt="blog" />
            <div className="date-box">
              <h3>23</h3>
              <span>SEP</span>
            </div>
          </div>
          <div className="blog-content">
            <h3>Liberty Divided Over Criticism Justice League</h3>
            <p>
              Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.
            </p>
            <button>READ MORE</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;