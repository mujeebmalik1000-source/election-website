import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./HomeCovrage.css";

const HomeCovrage = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,   // 🔥 ek baar hi chale
    threshold: 0.3       // 30% visible par start
  });

  const stats = [
    { id: 1, end: 25, suffix: "K", label: "AREA COVERAGE" },
    { id: 2, end: 32, suffix: "K", label: "CAMPAIGN DONE" },
    { id: 3, end: 25, suffix: "%", label: "PROJECT DONE" },
    { id: 4, end: 8, suffix: "th", label: "ACTIVE VOLUNTEER" },
  ];

  return (
    <section className="coverage-wrapper" ref={ref}>

      <div className="bg-image-layer"></div>
      <div className="color-overlay-layer"></div>

      <div className="stats-inner-container">
        {stats.map((stat) => (
          <div className="stat-block" key={stat.id}>
            <h2 className="stat-num">
              {inView ? (
                <CountUp end={stat.end} duration={2.5} />
              ) : (
                0
              )}
              {stat.suffix}
            </h2>
            <p className="stat-txt">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HomeCovrage;


