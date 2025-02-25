import React, { useState } from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from '../styles/Allhotel.module.css';
import connectDb from '../lib/mongodb.js';
import Image from "next/image";
import Head from "next/head";

export default function Guidemathura() {
    const incprice = (originalprice) => {
        let numericPrice = parseFloat(originalprice);
        let increasedPrice = numericPrice * 1.15;
        return increasedPrice.toFixed(2); // Round to 2 decimal places
    }
    const guides = [
        {
            gid: "1",
            name: "Ramesh Sharma",
            priceperday: 1500,
            area: "Mathura City",
            img: "https://img.freepik.com/free-vector/group-tourists-travelling-with-guide-holding-flag-flat-illustration_74855-18752.jpg",
            number: "+91 9876543210",
            language: ["English", "Hindi"],
            info: "Experienced in guiding through historical sites and temples in Mathura. Friendly and knowledgeable.",
            type: "Bilingual Guide",
        },
        {
            gid: "2",
            name: "Vijay Kumar",
            priceperday: 1200,
            area: "Govardhan Area",
            img: "https://img.freepik.com/free-vector/tour-guide-concept-illustration_114360-1962.jpg",
            number: "+91 8765432109",
            language: ["Hindi"],
            info: "Specializes in religious tours and Govardhan Parikrama. Fluent in local customs and history.",
            type: "Guide",
        },
        {
            gid: "3",
            name: "Online Guide Services",
            priceperday: 1000,
            area: "Virtual Tour",
            number: "+91 9123456780",
            language: ["English", "Hindi"],
            img: "https://img.freepik.com/premium-vector/call-center-operator-vector-illustrationcustomer-online-support-manager-woman-working_311563-517.jpg",
            info: "Provides real-time information about places, offers local insights, and ensures your journey runs smoothly",
            type: "Virtual",
        },
    ];

    const [showFormOverlay, setShowFormOverlay] = useState(false);
    const [selectedGuide, setSelectedGuide] = useState(null);
    const handleBook = (guide) => {
        setSelectedGuide(guide);
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
        noOfDays: "",
    });
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const data = {
            ...formData,
            gid: selectedGuide.gid,
            type: selectedGuide.type,
            price: selectedGuide.priceperday
        };

        try {
            const response = await fetch('/api/addguidebooking', {
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
    return (
        <>
            <Head>
                <title>Guides in Mathura - Your Local Companion</title>
                <meta
                    name="description"
                    content="Find expert guides in Mathura to enrich your journey. Explore the city's spiritual and cultural heritage with knowledgeable companions."
                />
                <meta
                    name="keywords"
                    content="guides in Mathura, Mathura tour guides, local guides in Mathura, spiritual guides in Mathura"
                />
                <meta
                    property="og:title"
                    content="Guides in Mathura - Your Local Companion"
                />
                <meta
                    property="og:description"
                    content="Discover Mathura with expert guides who bring its stories and traditions to life. Let us help you navigate the city with ease and insight."
                />
                <meta
                    property="og:image"
                    content="/logo.png"
                /> {/* Replace with the actual feature image URL */}
                <meta
                    property="og:url"
                    content="https://www.gigdarshan.com/guides-in-mathura"
                />
                <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.gigdarshan.com/guides-in-mathura" />

            </Head>



            <div>
                <Navbar />
                <div>
                    <h2 className='p-0 m-0 text-center mb-4 mt-3'>Guides in Mathura</h2>
                    <div className={styles.hotelGrid} >
                        {guides.map((guide, index) => (
                            <div key={index} className={`${styles.hotelCard} ${styles.allhotelcard}`} style={{ cursor: "pointer", padding: "10px" }} >
                                <div className={styles.allhotelcardcorosaldiv}>

                                    <div key={index} style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                                        <img src={guide.img} alt={`Cab Image`} style={{ width: "100%", height: "100%", overflow: "hidden" }} />
                                    </div>

                                </div>
                                <div className={styles.allhotelcarddesc}>
                                    <div className='d-flex justify-content-between w-100'>

                                        <h3 className='mb-0 p-0' >{guide.type}</h3>


                                    </div>
                                    {/* <div className='d-flex justify-content-around align-items-center w-100'>
                                    <div><i className="fa fa-user"></i>{cab.cabPerson} Seats</div>
                                    <div> <i className="fa fa-briefcase"></i>Luggage</div>
                                    <div className='d-flex justify-content-center align-items-center'><i className="fa fa-fan"></i>A/C</div>
                                </div> */}

                                    <p className='m-0 mt-1 text-muted w-100' style={{ fontSize: "12px" }}>{guide.info}</p>
                                    <div className='d-flex w-100 justify-content-start my-2'>
                                        {guide.language.map((lang, ind) => (
                                            <div key={ind} className='d-flex justify-content-center align-items-center mx-1' style={{ border: "2px solid orange", borderRadius: "9px", paddingInline: "8px", color: "orange" }}>
                                                {lang}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='d-flex mt-4 w-100'>
                                        <div className='w-75' style={{ borderRight: "1px solid black", marginRight: "3px" }}>
                                            <h5 className='text-danger m-0 mb-1'>Starting At: <span style={{ textDecoration: "line-through" }}>{incprice(guide.priceperday)} </span><br /><span className='text-dark'>₹{guide.priceperday}/day</span></h5>

                                        </div>
                                        <button className="btn btn-primary w-25" onClick={() => handleBook(guide)}>
                                            Book
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    {showFormOverlay && selectedGuide && (
                        <div className={styles.overlay}>
                            <form onSubmit={handleFormSubmit} className={styles.form} style={{ position: "relative" }}>
                                <button onClick={() => setShowFormOverlay(false)} className="btn btn-outline-danger mt-3" style={{ position: "absolute", top: "2px", right: "7px" }}>
                                    Back <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                                <h3>Enter Your Details</h3>


                                <label>Cab Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={selectedGuide.type}
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
                                    className="form-control mb-4"
                                    required
                                />
                                <div className='d-flex w-100 justify-content-between'>
                                    <div className='w-50'>
                                        <label>Starting Date</label>
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
                                        <label>Number of Days</label>
                                        <input
                                            type="number"
                                            name="noOfDays"
                                            min="1"
                                            max="9"
                                            maxLength={1}
                                            value={formData.noOfDays}
                                            onChange={handleDayInput}
                                            className="form-control w-100 mb-1"

                                            required
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-success w-100 mt-1" disabled={isSubmitting}>
                                    {isSubmitting ? 'Booking...' : 'Book Now'}
                                </button>
                            </form>

                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </>
    )
}
