import React from 'react';
import styles from '../styles/Review.module.css';
export default function Reviewcard(props) {
 

  return (
    <div className={styles.cardStyle}>
      <div className={styles.circleStyle} style={{background:"grey"}}>
        <img src={props.image} alt="User" className={styles.imgStyle} style={{objectFit:"cover"}} />
      </div>
      <p className={styles.reviewTextStyle}>{props.review}</p>
      <h6 className={styles.headingStyle}>{props.name}</h6>
    </div>
  );
}
