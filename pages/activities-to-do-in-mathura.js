import React, { useState } from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from '../styles/Allhotel.module.css';
import Image from "next/image";
import connectDb from '../lib/mongodb.js';
import Head from "next/head";

export async function getStaticProps() {
    try {
        // 1. Establish MongoDB connection at build time
        await connectDb();

        // 2. Fetch pooja data from the API
        const response = await fetch('https://gigmathura.vercel.app/api/getactivity'); // Adjust the API URL if needed for production
        const activityData = await response.json();
        return {
            props: {
                activityData, // Pass the fetched pooja data as a prop
            },
            revalidate: 150, // Optional: Revalidate every 150 seconds
        };
    } catch (error) {
        console.error("Error establishing database connection or", error);

        return {
            notFound: true, // Handle the error gracefull
        };
    }
}
export default function Activitymathura({ activityData }) {
    const incprice = (originalprice) => {
        let numericPrice = parseFloat(originalprice);
        if (numericPrice == 0) {
            return;
        }
        let increasedPrice = numericPrice * 1.15;
        return increasedPrice.toFixed(2); // Round to 2 decimal places
    }


    const [showFormOverlay, setShowFormOverlay] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const handleBook = (activity) => {
        setSelectedActivity(activity);
        setShowFormOverlay(true);
    }
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        date: "",
        noOfPerson: ""
    });
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const data = {
            ...formData,
            aid: selectedActivity.aid,
            aname: selectedActivity.name,
            aprice: selectedActivity.price
        };

        try {
            const response = await fetch('/api/addactivitybooking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            alert('Booking Successfully Created. We will contact you shortly!');
            window.location.reload();
        } catch (error) {
            alert('Error submitting form');
        } finally {
            setIsSubmitting(false);
            setShowFormOverlay(false);
        }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const handlePhoneInput = (e) => {
        const value = e.target.value;

        // Allow only numbers and '+' at the beginning
        const formattedValue = value.replace(/(?!^\+)[^\d]/g, ''); // Allow '+' only as the first character, remove others

        // Ensure the '+' is only at the start
        if (formattedValue.indexOf('+') > 0) {
            e.target.value = formattedValue.replace(/\+/g, ''); // Remove '+' if it's not the first character
        } else {
            e.target.value = formattedValue; // Set the sanitized value
        }

        handleFormChange(e); // Call handleFormChange to update the form data state
    };
    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
        }
        return description;
    };
    const [showDetail, setShowDetail] = useState(false);
    const [activityDetail, setActivityDetail] = useState(null);

    const handleDetail = (activity) => {
        setShowDetail(true);
        setActivityDetail(activity)
    }
    const handleDayInput = (e) => {
        let value = e.target.value;

        // Allow only an empty value (to let the user delete) or a single digit between 1 and 9
        if (value === '' || /^[1-9]$/.test(value)) {
            e.target.value = value; // Update the input value
            handleFormChange(e); // Call handleFormChange to update the form data state
        } else {
            // Reset the input to the last valid state
            e.target.value = ''; // Clear invalid input
        }
    };
    return (
        <>
            <Head>
                <title>Activities in Mathura - Explore Divine Experiences</title>
                <meta
                    name="description"
                    content="Discover the best activities and experiences in Mathura. From spiritual journeys to cultural immersions, plan your perfect Mathura adventure."
                />
                <meta
                    name="keywords"
                    content="activities in Mathura, experiences in Mathura, Mathura tourism, things to do in Mathura"
                />
                <meta
                    property="og:title"
                    content="Activities in Mathura - Explore Divine Experiences"
                />
                <meta
                    property="og:description"
                    content="Immerse yourself in the divine and cultural experiences of Mathura. Explore temples, festivals, and local heritage for an unforgettable journey."
                />
                <meta
                    property="og:image"
                    content="/logo.png"
                /> {/* Replace with the actual feature image URL */}
                <meta
                    property="og:url"
                    content="https://www.gigdarshan.com/activities-in-mathura"
                />
        <link rel="canonical" href="https://www.gigdarshan.com/activities-in-mathura" />

                <meta property="og:type" content="website" />
            </Head>


            <div>
                <Navbar />
                <div>
                    <h2 className='p-0 m-0 text-center mb-4 mt-3'>Activities To Do in Mathura</h2>
                    <div className={styles.hotelGrid} >
                        {activityData.map((activity, index) => (
                            <div key={index} className={`${styles.hotelCard} ${styles.allhotelcard}`} style={{ padding: "10px" }} >
                                <div className={styles.allhotelcardcorosaldiv}>

                                    <div key={index} style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                                        <img src={activity.img} alt={`Pooja Image`} style={{ width: "100%", height: "100%", overflow: "hidden" }} />
                                    </div>

                                </div>
                                <div className={styles.allhotelcarddesc}>
                                    <div className='d-flex justify-content-between w-100'>

                                        <h5 className='mb-0 p-0' >{activity.name}</h5>


                                    </div>
                                    {/* <div className='d-flex justify-content-around align-items-center w-100'>
                                    <div><i className="fa fa-user"></i>{cab.cabPerson} Seats</div>
                                    <div> <i className="fa fa-briefcase"></i>Luggage</div>
                                    <div className='d-flex justify-content-center align-items-center'><i className="fa fa-fan"></i>A/C</div>
                                </div> */}

                                    <p className='m-0 mt-1 text-muted w-100' style={{ fontSize: "12px" }}>{truncateDescription(activity.description, 100)}<span style={{ cursor: "pointer", color: "orange", textDecoration: "underline", fontWeight: "bold" }} onClick={() => handleDetail(activity)}> More details</span></p>

                                    <div className='d-flex mt-4 w-100'>
                                        <div className='w-75' style={{ borderRight: "1px solid black", marginRight: "3px" }}>
                                            <h5 className='text-danger m-0 mb-1'>Starting At: <span style={{ textDecoration: "line-through" }}>{incprice(activity.price)} </span><br /><span className='text-dark'>₹{activity.price}</span></h5>

                                        </div>
                                        <button className="btn btn-primary w-25" onClick={() => handleBook(activity)}>
                                            Book
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    {showFormOverlay && selectedActivity && (
                        <div className={styles.overlay}>
                            <form onSubmit={handleFormSubmit} className={styles.form} style={{ position: "relative" }}>
                                <button onClick={() => setShowFormOverlay(false)} className="btn btn-outline-danger mt-3" style={{ position: "absolute", top: "2px", right: "7px" }}>
                                    Back <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                                <h3>Enter Your Details</h3>


                                <label>Activity Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={selectedActivity.name}
                                    disabled
                                    className="form-control mb-1"

                                />



                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    className="form-control mb-1"
                                    required
                                />
                                <label>Your Number (Along Country Code)</label>
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={(e) => {
                                        handleFormChange(e);
                                        handlePhoneInput(e);  // Ensure only numbers are entered
                                    }}
                                    className="form-control mb-1"
                                    required
                                />
                                <label>Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="form-control mb-1"
                                    required
                                />
                                <div className='d-flex w-100 justify-content-between'>
                                    <div className='w-50'>
                                        <label>Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleFormChange}
                                            className="form-control w-100 mb-1"
                                            required
                                        />
                                    </div>
                                    <div className='w-50'>
                                        <label>Number of People</label>
                                        <input
                                            type="number"
                                            name="noOfPerson"
                                            min="1"
                                            max="9"
                                            maxLength={1}
                                            value={formData.noOfPerson}
                                            onChange={handleDayInput}
                                            className="form-control w-100 mb-1"

                                            required
                                        />
                                    </div>
                                </div>


                                <button type="submit" className="btn btn-success w-100 mt-2" disabled={isSubmitting}>
                                    {isSubmitting ? 'Booking...' : 'Book Now'}
                                </button>
                            </form>

                        </div>
                    )}
                    {showDetail && (
                        <div className={styles.overlay}>
                            <div className={styles.form} style={{ position: "relative" }}>
                                <button onClick={() => setShowDetail(false)} className="btn btn-outline-danger mt-3" style={{ position: "absolute", top: "2px", right: "7px" }}>
                                    Back <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                                <h3 className='m-0'>{activityDetail.name}</h3>
                                <p className='m-0 text-muted'>{activityDetail.location}</p>
                                <p className='mt-3'>{activityDetail.description}</p>
                                <h6>Timing:{activityDetail.timing} </h6>


                            </div>

                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </>
    )
}
