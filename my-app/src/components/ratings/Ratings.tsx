"use client"
import React from 'react';
import styles from './ratings.module.css';


interface RatingBarProps {
  label: string;
  rating: number;
}

const RatingBar: React.FC<RatingBarProps> = ({ label, rating }) => (
  <div className={styles.ratingBar}>
    <div className={styles.ratingLabel}>{label}</div>
    <div className={styles.flex}>
        <div className={styles.ratingBarBackground}>
            <div 
            className={styles.ratingBarFill}
            style={{ width: `${rating}%` }}
            ></div>
        </div>
        <div className={styles.ratingPercentage}>{rating}%</div>
    </div>
    </div>

);

const Ratings = () => {
  const ratings = [
    { label: "Repair Quality", rating: 90 },
    { label: "Happy Customer", rating: 80 },
    { label: "Support Centre", rating: 87 }
  ];

  return (
    <div className={styles.multiRatingContainer}>

      {ratings.map((item, index) => (
        <RatingBar key={index} label={item.label} rating={item.rating} />
      ))}
    </div>
  );
};

export default Ratings;