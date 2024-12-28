import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Image from 'next/image';
import Whyus from '@/components/Whyus.js';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div>
            <Navbar />
            <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <div className={styles.offerings}>
                    <div>
                        <h6 className="text-muted mt-3">What We Offer?</h6>
                        <h6 className='mb-3' style={{marginTop:"-7px"}}>
                            Choose from our  <strong> <span style={{ color: '#24BBEF' }}>wide range</span></strong> of Services!
                        </h6>
                    </div>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard1}`} >
                            <div className="d-flex justify-content-center align-items-center w-100 ">
                                <i className="fa fa-hotel" style={{ fontSize: "30px", borderRadius: "50%" }}></i>
                            </div>
                            <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                <h6 className={styles.headingAbout}>
                                    Accomodation
                                </h6>
                                <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                    Dharmashalas to 4 Star Hotels
                                </div>
                            </div>
                        </div>
                        <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard2}`} >
                            <div className="d-flex justify-content-center align-items-center w-100 ">
                                <i className="fa fa-taxi" style={{ fontSize: "30px", borderRadius: "50%" }}></i>
                            </div>
                            <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                <h6 className={styles.headingAbout}>
                                    Travel
                                </h6>
                                <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                    E-Rickshaws to AC Cabs
                                </div>
                            </div>
                        </div>
                        <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard3}`} >
                            <div className="d-flex justify-content-center align-items-center w-100 ">
                                <i className="fa fa-map" style={{ fontSize: "30px", borderRadius: "50%" }}></i>
                            </div>
                            <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                <h6 className={styles.headingAbout}>
                                    Itineraries
                                </h6>
                                <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                    Customize your Itineraries
                                </div>
                            </div>
                        </div>
                        <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard4}`} >
                            <div className="d-flex justify-content-center align-items-center w-100 ">
                                <i className="fa fa-user" style={{ fontSize: "30px", borderRadius: "50%" }}></i>
                            </div>
                            <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                <h6 className={styles.headingAbout}>
                                    Guides
                                </h6>
                                <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                    24*7 Guided Tours
                                </div>
                            </div>
                        </div>
                        <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard5}`} >
                            <div className="d-flex justify-content-center align-items-center w-100 ">
                                <i className="fa fa-gamepad" style={{ fontSize: "30px", borderRadius: "50%" }}></i>
                            </div>
                            <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                <h6 className={styles.headingAbout}>
                                    Activites
                                </h6>
                                <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                    Explore Local Activites of the City
                                </div>
                            </div>
                        </div>
                        <div className={`my-2 d-flex flex-column ${styles.aboutcard} ${styles.acard6}`} >
                            <div className="d-flex justify-content-center align-items-center w-100 ">
                                <i className="fa fa-fire" style={{ fontSize: "30px", borderRadius: "50%" }}></i>
                            </div>
                            <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                <h6 className={styles.headingAbout}>
                                    Pooja
                                </h6>
                                <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                    Arrangement of Pooja Rituals
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-center align-items-center flex-wrap'>
                    <div className={`w-100 mb-5 ${styles.description}`}>
                    <div>
                        <h6 className="w-100 text-center text-muted mt-5">Who Are We?</h6>
                        <h6 className="w-100 text-center mb-3" style={{marginTop:"-7px"}}>
                        Your<strong> <span style={{ color: '#ff8134' }}>Local Rishtedar</span></strong> , wherever you go 
                        </h6>
                    </div>
                        <p>GIG is a venture designed to redefine religious tourism in India, transforming pilgrimage journeys into deeply personalized, seamless, and culturally immersive experiences. We see ourselves not as a typical travel agency, but as a trusted local companion—a “rishtedar” (family member) in a city you’ve never visited before. Our mission is to be the one-stop solution for all your pilgrimage needs, focusing on convenience, comfort, and authenticity.
                        </p>
                        <p><span style={{ fontWeight: "bold" }}>Our Vision:</span> Like a Destination Management Company (DMC), GIG offers valuable local insights, but we go beyond traditional offerings. Instead of just providing accommodation and transportation, we create a personalized journey by pairing each visitor with a dedicated point of contact (SPOC). This SPOC isn’t just a guide; they’re a local companion who acts like family, helping you navigate the city, organizing your schedule, and giving you an authentic experience that feels personal.
                        </p>
                        <p><span style={{ fontWeight: "bold" }}>Our Position:</span> GIG positions itself as a ‘local family’ companion for tourists, alleviating the common stresses of religious travel and adding a personal touch to every step of your journey. Whether it’s arranging clean and comfortable accommodations, providing reliable and affordable transportation, connecting you with trusted local guides, organizing pooja rituals and VIP darshans, or offering cashbacks on local dining and shopping, GIG’s priority is to make your journey safe, convenient, and deeply fulfilling. With dedicated local companions to guide you every step of the way, we ensure that every aspect of your pilgrimage is authentic, respectful, and tailored to your needs.GIG is not just a service provider; we’re your “home away from home,” here to make your spiritual journey as meaningful and hassle-free as possible.
                        </p>
                    </div>
                </div>
                <Whyus />
                
            </div>
            <Footer />

        </div>
    )
}