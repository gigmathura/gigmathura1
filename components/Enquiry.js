import React, { useState } from 'react';
import styles from '../styles/Enquiry.module.css'; // Import CSS for Enquiry component

export default function Enquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('Submit');

  const handleSubmit = async (event) => {
    setStatus('Wait');
    event.preventDefault();
    try {
      const response = await fetch('/api/addenquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, enquiry: enquiry, number: number, email: email }),
      });
      const json = await response.json();

      if (json.success) {
        setEnquiry('');
        setName('');
        setNumber('');
        setEmail('');
        setStatus('Submitted');
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          setStatus('Submit');
        }, 1000);

        console.log('Enquiry added successfully!');
      } else {
        console.error('Error adding enquiry');
      }
    } catch (error) {
      console.error('Error adding enquiry', error);
    }
  };

  return (
    <div className={styles.enquiry}>
      <div className={`${styles.enquiryContainer} d-flex justify-content-center flex-column align-items-center`}>
        <h4 className="text-decoration-underline mb-2">Enquiry!</h4>
        <form onSubmit={handleSubmit} className={`${styles.enquiryForm} d-flex justify-content-center flex-column align-items-center p-4`}>
          <input type="text" className="w-100 bg-transparent border-1 text-dark" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} required />
          <input type="email" name='email' className="w-100 bg-transparent border-1 text-dark" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <input type="tel" className={`w-100 bg-transparent border-1 text-dark ${styles.noarrow}`} placeholder="Number" value={number} onChange={(event) => setNumber(event.target.value)} required />
          <textarea className="w-100 bg-transparent border-1 text-dark" placeholder="Enquiry" style={{ fontSize: '3vmin' }} value={enquiry} onChange={(event) => setEnquiry(event.target.value)} required />
          <button type="submit" className="btn btn-dark " disabled={status=="Wait"}>{status}</button>
        </form>
      </div>
    </div>
  );
}
