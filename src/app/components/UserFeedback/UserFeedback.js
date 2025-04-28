"use client";
import React, { useState, useEffect } from "react";
import styles from "./UserFeedback.module.css"; 

const feedbacks = [
  {
    id: 1,
    text: "This platform made tax filing so much easier for my business!",
  },
  {
    id: 2,
    text: "Highly recommend! The auto-filing feature saved me hours of work.",
  },
  {
    id: 3,
    text: "Multi-state compliance has never been this smooth. Love it!",
  },
  {
    id: 4,
    text: "Audit-ready reports gave me so much peace of mind during tax season.",
  },
];

const UserFeedback = () => {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedbackIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change feedback every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section className={styles.userFeedbackContainer}>
      <div className={styles.feedbackCard}>
        <p className={styles.feedbackText}>
          "{feedbacks[currentFeedbackIndex].text}"
        </p>
      </div>
    </section>
  );
};

export default UserFeedback;

















/*  

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

*/