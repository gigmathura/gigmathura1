// pages/hotels-in-mathura/[hotelId].js
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import connectDb from '../../lib/mongodb';
import styles from '../../styles/Allhotel.module.css';
import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

export async function getStaticPaths() {
    // Fetch all hotel IDs from your API or database
    const response = await fetch('https://gigmathura.vercel.app/api/gethotels');
    const hotelData = await response.json();
    console.log("propsss", hotelData);

    // Generate paths for each hotel
    const paths = hotelData.map((hotel) => ({
        params: { hotelId: hotel.hotelId.toString() },
    }));

    return {
        paths,
        fallback: 'blocking', // or 'true' if you want to generate pages on-demand
    };
}

export async function getStaticProps({ params }) {
    const { hotelId } = params;

    try {
        // Fetch the specific hotel data
        const response = await fetch(`https://gigmathura.vercel.app/api/gethoteldata?hotelId=${hotelId}`);
        const data = await response.json();

        console.log("API Response:", data); // Log the response for debugging

        if (!data.success || !data.hotelData) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                hotelData: data.hotelData, // Pass only the `hotelData` object
            },
            revalidate: 150, // Optional: Revalidate every 150 seconds
        };
    } catch (error) {
        console.error('Error fetching hotel data:', error);
        return {
            notFound: true,
        };
    }
}

export default function HotelDetails({ hotelData }) {
    const [showFormOverlay, setShowFormOverlay] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        noOfRooms: 1,
        checkInDate: "",
        checkOutDate: ""
    });
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const rating = (ratingV) => {
        let rating = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= parseFloat(ratingV)) {
                rating += '⭐';
            } else {
                rating += '☆';
            }
        }
        return rating;
    };

    const incprice = (originalprice) => {
        let numericPrice = parseFloat(originalprice);
        let increasedPrice = numericPrice * 1.15;
        return increasedPrice.toFixed(2); // Round to 2 decimal places
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRoomSubmit = (room) => {
        setShowFormOverlay(true);
        setSelectedRoom(room);
    };

    const handleRoomInput = (e) => {
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const data = {
            ...formData,
            hotelId: hotelData.hotelId,
            roomName: selectedRoom.roomName,
            roomPrice: selectedRoom.price,
        };

        try {
            const response = await fetch('/api/addhotelbooking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log(result);
            alert('Booking Successfully Created. We will contact you shortly!');
            window.location.reload();
        } catch (error) {
            alert('Error submitting form');
        } finally {
            setIsSubmitting(false);
            setShowFormOverlay(false);
        }
    };

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
                <title>{hotelData.name} - Hotels in Mathura</title>
                <meta name="description" content={`Discover ${hotelData.name}, a top-rated hotel in Mathura. ${hotelData.description}`} />
                <meta name="keywords" content={`hotel in Mathura, ${hotelData.name}, stay in Mathura`} />
                <meta property="og:title" content={`${hotelData.name} - Hotels in Mathura`} />
                <meta property="og:description" content={`Discover ${hotelData.name}, a top-rated hotel in Mathura. ${hotelData.description}`} />
                <meta property="og:image" content={hotelData.img[0] || "/default-image.jpg"} /> {/* Fallback to a default image */}
                <meta property="og:url" content={`https://www.gigdarshan.com/hotels-in-mathura/${hotelData.hotelId}`} />
                <link rel="canonical" href={`https://www.gigdarshan.com/hotels-in-mathura/${hotelData.hotelId}`} />
                <meta property="og:type" content="website" />
            </Head>

            <div>
                <Navbar />
                <div className='p-0'>
                    {/* Full Hotel Overlay Layout */}
                    <div className={`${styles.overlayk}`} style={{ zIndex: "1800" }}>
                        <div className={styles.fullhoteloverlayContentContainer}>
                            <div className={`${styles.overlayContent} ${styles.fhoverlayContent}`}>
                                {/* <div className='w-100' style={{ cursor: "pointer", display: "flex", justifyContent: "flex-end" }}>
                                    <button className="btn btn-outline-secondary mb-2 px-2 py-1" onClick={() => setShowFullHotelOverlay(false)}>Back <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                </div> */}
                                <div className={styles.fhImageDescription}>
                                    <div className={styles.fhdescription}>
                                        <h2 className='mb-0'>{hotelData.name}</h2>
                                        <p className={`${styles.textcenter} text-muted m-0 p-0`} >{hotelData.location}</p>
                                        <a href={hotelData.map} target="_blank">View On Map</a>
                                        <p style={{ fontSize: "3vmin", margin: "0px", marginTop: "3px", marginBottom: "4px" }}>{rating(hotelData.ratingValue)} ({hotelData.ratingValue}/5.0 Rating)</p>
                                        <p style={{ fontSize: "3vmin", margin: "0px", marginTop: "3px", marginBottom: "4px" }}>Type - {hotelData.type}</p>
                                        <p className={`text-muted ${styles.fhdescriptionpara}`}>{hotelData.description}</p>
                                    </div>
                                    <div className={styles.fhImage} style={{ zIndex: "1" }}>
                                        <Carousel interval={2500} pause={false} autoPlay infiniteLoop style={{ zIndex: "1" }}>
                                            {hotelData.img.map((image, index) => (
                                                <div key={index} className='w-100 h-100' style={{ zIndex: "1" }}>
                                                    <Image src={image} alt={`Hotel Image ${index}`} width={300} height={400} objectFit='cover' />
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                                <div className={styles.fhfacilitiesContainer}>
                                    <div className={`${styles.fhfacilities}`}>
                                        <h4 className='text-dark' style={{ borderBottom: "1px solid blue", width: "max-content" }}>What this place Offers?</h4>
                                        <ul className={`inclusionlistdiv ${styles.customlist}`} style={{ display: "flex", flexWrap: "wrap" }}>
                                            {hotelData.amenities.map((item, index) => (
                                                <li key={index} className='m-2'><i className="fa fa-check" aria-hidden="true" style={{ color: "#2a9d8f", marginRight: "10px", fontSize: "18px", width: "max-content" }}></i>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.fhfacilities}>
                                        <h4 className='text-dark' style={{ borderBottom: "1px solid blue", width: "max-content" }}>Additional Info</h4>
                                        <ul className="m-0 pb-0" style={{ listStyle: "circle" }}>
                                            {hotelData.AdditionalInfo.map((info, index) => (
                                                <li key={index}>
                                                    {info}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <h3 className='mt-5' style={{ borderBottom: "1px solid blue" }}>Rooms</h3>
                                <div className={`mb-5 ${styles.roomContainer}`}>
                                    {hotelData.rooms.map((room, index) => (
                                        <div key={index} className={styles.roomcard}>
                                            <div style={{ width: "100%", height: "250px", background: "#bdbaba" }}>
                                                <Carousel interval={2500} pause={false} autoPlay infiniteLoop>
                                                    {room.img.map((roomImg, idx) => (
                                                        <div key={idx} style={{ width: "100%", height: "250px", background: "grey" }}>
                                                            <Image src={roomImg} alt={`Room ${idx}`} width={200} height={250} />
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            </div>
                                            <h4 className='mt-1'>{room.roomName}</h4>
                                            <div className='d-flex flex-column'>
                                                <ul className={`w-100 inclusionlistdiv ${styles.customlist}`} style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                                                    {room.amenities.map((item, index) => (
                                                        <li key={index} className='m-2'><i className="fa fa-check" aria-hidden="true" style={{ color: "#2a9d8f", marginRight: "10px", fontSize: "18px", width: "max-content" }}></i>{item}</li>
                                                    ))}
                                                </ul>
                                                <ul className="m-0" style={{ listStyle: "circle", display: "flex", flexWrap: "wrap", paddingLeft: "20px" }}>
                                                    {room.info.map((info, index) => (
                                                        <li className='' style={{ marginRight: "20px" }} key={index}>
                                                            {info}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className='d-flex mt-4 w-100 px-2 mb-1'>
                                                <div className='w-75' style={{ borderRight: "1px solid black", marginRight: "3px" }}>
                                                    <h5 className='text-danger m-0 mb-1'>Starting At: <span style={{ textDecoration: "line-through" }}>{incprice(room.price)}  </span><br /><span className='text-dark'>₹{room.price}</span></h5>
                                                </div>
                                                <button className="btn btn-primary w-25" onClick={() => handleRoomSubmit(room)}>
                                                    Select
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Overlay */}
                    {showFormOverlay && (
                        <div className={styles.overlay}>
                            <form onSubmit={handleFormSubmit} className={styles.form} style={{ position: "relative" }}>
                                <button onClick={() => setShowFormOverlay(false)} className="btn btn-outline-danger mt-3" style={{ position: "absolute", top: "2px", right: "7px" }}>
                                    Back <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                                <h3>Enter Your Details</h3>

                                <div className='d-flex w-100 justify-content-between'>
                                    <div className='w-50'>
                                        <label>Room Name</label>
                                        <input type="text" value={selectedRoom.roomName} disabled className="form-control w-100 mb-1" />
                                    </div>
                                    <div className='w-50'>
                                        <label>Number of Rooms</label>
                                        <input
                                            type="number"
                                            name="noOfRooms"
                                            min="1"
                                            max="9"
                                            maxLength={1}
                                            value={formData.noOfRooms}
                                            onChange={handleRoomInput}
                                            className="form-control w-100 mb-1"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='d-flex w-100 justify-content-between'>
                                    <div className='w-50'>
                                        <label>Check-In Date</label>
                                        <input
                                            type="date"
                                            name="checkInDate"
                                            value={formData.checkInDate}
                                            onChange={handleFormChange}
                                            className="form-control w-100 mb-1"
                                            required
                                        />
                                    </div>
                                    <div className='w-50'>
                                        <label>Check-Out Date</label>
                                        <input
                                            type="date"
                                            name="checkOutDate"
                                            value={formData.checkOutDate}
                                            onChange={handleFormChange}
                                            className="form-control w-100 mb-4"
                                            min={formData.checkInDate}
                                            required
                                        />
                                    </div>
                                </div>
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
    );
}