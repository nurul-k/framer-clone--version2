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
        {`"${feedbacks[currentFeedbackIndex].text}"`}
        </p>
      </div>
    </section>
  );
};

export default UserFeedback;