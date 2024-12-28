import React, { useState, useEffect } from 'react';
import Reviewcard from './Reviewcard';
// import { v4 as uuidv4 } from 'uuid';
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// import { initializeApp } from 'firebase/app';
// import CancelIcon from '@mui/icons-material/Cancel';
import styles from '../styles/Review.module.css'; // Import CSS for Review component

// const firebaseConfig = {
//   apiKey: 'AIzaSyC0o6YqiV4-Uo9ABE3k__Q-W21LlxQiHJY',
//   authDomain: 'gig-storage.firebaseapp.com',
//   projectId: 'gig-storage',
//   storageBucket: 'gig-storage.appspot.com',
//   messagingSenderId: '399265182529',
//   appId: '1:399265182529:web:ce7f0df85c4dbee20927c0',
//   measurementId: 'G-C9PCKZBS8E',
// };
// const app = initializeApp(firebaseConfig);

export default function Review() {
//   const [allReview, setAllReview] = useState([]);
const [allReview] = useState([
    {
      id: 1,
      name: 'Jay Singh',
      review: 'Great service! Had an amazing experience.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1682089869602-2ec199cc501a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww', // Placeholder image
    },
    {
      id: 2,
      name: 'Parth Awasthi',
      review: 'The trip was well organized, and the guides were knowledgeable.',
      imageUrl: 'https://media.istockphoto.com/id/1288039261/photo/portrait-of-a-smiling-middle-aged-man-of-indian-origin.jpg?s=612x612&w=0&k=20&c=hksg2MpAsM6pQSR-TASLnfFE4-sDPcYHyE6-edycJDI=', // Placeholder image
    },
    {
      id: 3,
      name: 'Ravi Kumar',
      review: 'Excellent service! Will definitely recommend to others.',
      imageUrl: 'https://img.freepik.com/free-photo/young-bearded-hindu-student-with-backpack-pastel-wall_496169-1524.jpg?semt=ais_hybrid', // Placeholder image
    },   {
        id: 4,
        name: 'Sanjay Sahu',
        review: 'The trip was well organized, and the guides were knowledgeable.',
        imageUrl: 'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg', // Placeholder image
      },   {
        id: 5,
        name: 'Riya Aawsthi',
        review: 'The trip was well organized, and the guides were knowledgeable.',
        imageUrl: 'https://t3.ftcdn.net/jpg/08/14/25/28/360_F_814252814_bK3CuxthbPNGtgDKXoyJYQkZgkkyPbBI.jpg', // Placeholder image
      },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [status, setStatus] = useState('Submit');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//   };

//   const handleFileUpload = async () => {
//     if (selectedImage) {
//       const storage = getStorage(app);
//       const storageRef = ref(storage, `reviews/${uuidv4()}`);
//       const uploadTask = uploadBytesResumable(storageRef, selectedImage);

//       try {
//         await uploadTask;
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//         return downloadURL;
//       } catch (error) {
//         console.error('Error uploading file:', error);
//       }
//     } else {
//       alert('Please select a file to upload.');
//     }
//   };

//   async function loadData() {
//     let response = await fetch('http://localhost:5000/api/getreviews', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     response = await response.json();
//     setAllReview(response);
//   }

//   useEffect(() => {
//     loadData();
//   }, []);

//   const handleReviewSubmit = async (event) => {
//     event.preventDefault();
//     setStatus('Adding...');
//     const url = await handleFileUpload();
//     try {
//       const response = await fetch('http://localhost:5000/api/create-review', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: name, review: review, imageUrl: url }),
//       });
//       const json = await response.json();

//       if (json.success) {
//         setStatus('Yay Added!');
//         setTimeout(() => {
//           window.location.reload();
//         }, 1000);
//       } else {
//         console.error('Error creating review:');
//       }
//     } catch (error) {
//       console.error('Error creating review:', error);
//     }
//   };
const handleReviewSubmit = (event) => {
    event.preventDefault(); // Prevent form submission behavior (if it's inside a form)
    alert("Submit");
  };
  
  const handleFileChange = (event) => {
    console.log("filechange")
  };
  const handleFileUpload = (event) => {
    console.log("FilUpload")
  };
  return (
    <div className={styles.review}>
      <div className={`${styles.reviewContainer} d-flex justify-content-center align-items-center flex-column pb-4 b-radius`}>
        <h3 className={styles.heading}>Happy <span style={{ color: 'orange' }}>Bhakts!</span></h3>
        <div className={styles.blogCardContainer}>
          {allReview.map((reviewitem) => (
            <Reviewcard key={reviewitem.id} name={reviewitem.name} review={reviewitem.review} image={reviewitem.imageUrl} />
          ))}
        </div>
        {/* <button className="btn btn-info mt-1" onClick={() => setShowForm(true)}>Add Review</button> */}
      </div>

      {/* {showForm && (
        <div className={`${styles.formContainer} w-100 d-flex justify-content-center align-items-center flex-column py-5`}>
          <h5>Give US <span style={{ color: 'green' }}> Review!</span></h5>
          <p>Hope You Liked Our Service</p>
          <div className={styles.formWrapper}>
            <form onSubmit={handleReviewSubmit} className={styles.form}>
              <div className="row w-75 my-2">
                <label className="col-5" style={{ fontSize: '3vmin' }}>Name</label>
                <input type="text" className="col-7" style={{ fontSize: '3vmin' }} value={name} onChange={(event) => setName(event.target.value)} required />
              </div>
              <div className="row w-75">
                <label className="col-5" style={{ fontSize: '3vmin' }}>Review</label>
                <textarea className="col-7" style={{ fontSize: '3vmin' }} value={review} onChange={(event) => setReview(event.target.value)} required />
              </div>
              <div className="row w-75 my-2">
                <label className="col-5" style={{ fontSize: '3vmin' }}>Image</label>
                <input type="file" className="col-7" style={{ fontSize: '3vmin' }} onChange={handleFileChange} required />
              </div>
              <button type="submit" className="btn btn-dark mt-2" disabled={status === 'Adding...'}>{status}</button>
            </form>
            <i className="fa fa-close" onClick={() => setShowForm(false)} style={{ position: 'absolute', top: '40px', right: '40px' }}></i>
          </div>
        </div>
      )} */}
    </div>
  );
}
