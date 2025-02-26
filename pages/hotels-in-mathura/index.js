import React, { useState } from 'react'
import { useRouter } from 'next/router'; 
import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';
import connectDb from '../../lib/mongodb.js';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel'; // Import the carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import styles from '../../styles/Allhotel.module.css';
import Head from "next/head";
import Link from 'next/link';
export async function getStaticProps() {
    try {
        // 1. Establish MongoDB connection at build time
        await connectDb();

        // 2. Fetch hotel data from the API
        const response = await fetch('https://gigmathura.vercel.app/api/gethotels'); // Adjust the API URL if needed for production
        const hotelData = await response.json();
        return {
            props: {
                hotelData, // Pass the fetched hotel data as a prop
            },
            revalidate: 150, // Optional: Revalidate every 60 seconds
        };
    } catch (error) {
        console.error("Error establishing database connection or fetching data:", error);

        return {
            notFound: true, // Handle the error gracefully
        };
    }
}
export default function Hotels({ hotelData }) {
    const router = useRouter();
    const rating = (ratingV) => {
        let rating = ""
        for (let i = 1; i <= 5; i++) {
            if (i <= parseInt(ratingV)) {
                rating = rating + "⭐"
            }
            else {
                rating = rating + "☆"
            }
        }
        return rating
    }
    const incprice = (originalprice) => {
        let numericPrice = parseFloat(originalprice);
        let increasedPrice = numericPrice * 1.15;
        return increasedPrice.toFixed(2); // Round to 2 decimal places
    }

    return (
        <>
            <Head>
                <title>Hotels in Mathura</title>
                <meta name="description" content="Find the best hotels in Mathura for your next trip. Comfort and luxury at affordable prices." />
                <meta name="keywords" content="hotel in Mathura, stay in Mathura, Mathura hotels" />
                <meta property="og:title" content="Hotels in Mathura - Your Perfect Stay" />
                <meta property="og:description" content="Find the best hotels in Mathura for your next trip. Comfort and luxury at affordable prices." />
                <meta property="og:image" content="/logo.png" /> {/* Replace with your feature image URL */}
                <meta property="og:url" content="https://www.gigdarshan.com/hotels-in-mathura" />
                <link rel="canonical" href="https://www.gigdarshan.com/hotels-in-mathura" />

                <meta property="og:type" content="website" />
            </Head>

            <div>
                <Navbar />
                <div className='p-4'>
                    <h2 className='p-0 m-0 text-center mt-3'>Shortlisted Hotels For You</h2>
                    <p className='p-0 mt-0 mb-4 text-muted text-center '> Hotels here are handpicked for its <strong className='text-danger'>prime location</strong>, <strong style={{ color: "orange" }}>comfort</strong>, and <strong className='text-success'>convenience</strong></p>
                    <div className={styles.hotelGrid} >
                        {hotelData.map((hotel, index) => (
                            < Link key={index} href={`/hotels-in-mathura/${hotel.hotelId}`} style={{ textDecoration: "none" }} passHref>
                                <div key={index} className={`${styles.hotelCard} ${styles.allhotelcard}`} style={{ cursor: "pointer" }} >
                                    <div className={styles.allhotelcardcorosaldiv}>
                                        <Carousel interval={2500} pause={false} autoPlay infiniteLoop>
                                            {hotel.img.map((img, idx) => (
                                                <div key={idx} style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                                                    <Image src={img} alt={`Hotel Image ${idx}`} width={200} height={200} objectFit='cover' loading="lazy" />
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                    <div className={styles.allhotelcarddesc}>
                                        <h3 className='mb-0 p-0' >{hotel.name}</h3>
                                        <p className='m-0 text-muted' style={{ fontSize: "12px", paddingRight: "3px" }}>{hotel.location}</p>
                                        <p className='mt-1'>{rating(hotel.ratingValue)}({hotel.ratingValue}/5.0 Rating)</p>
                                        <div className='d-flex mt-3 w-100 px-2 mb-1'>
                                            <div className='w-75' style={{ borderRight: "1px solid black", marginRight: "3px" }}>
                                                <h5 className='text-danger m-0 mb-1'>Starting At: <span style={{ textDecoration: "line-through" }}>{incprice(hotel.startprice)} </span><br /><span className='text-dark'>₹{hotel.startprice}</span></h5>

                                            </div>
                                            <button className="btn btn-primary w-25" onClick={() => router.push(`/hotels-in-mathura/${hotel.hotelId}`)}>
                                View
                                </button>
                                            {/* <Link className='w-25 h-100' href={`/hotels-in-mathura/${hotel.hotelId}`} passHref> */}
                                                {/* <a className="btn btn-primary w-25 text-center" href={`/hotels-in-mathura/${hotel.hotelId}`}>
                                                    View
                                                </a> */}
                                            {/* </Link> */}
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
