import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ShriVishramGhatMathura = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Discover Shri Vishram Ghat, the serene and sacred ghat on the banks of Yamuna River in Mathura. Learn about its spiritual and historical significance." />
                <meta name="keywords" content="Mathura, Vishram Ghat, Yamuna River, temples in Mathura, Hindu pilgrimage, Mathura tourism" />
                <meta name="author" content="GIG Mathura" />
                <link rel="canonical" href="https://www.gigdarshan.com/blogs/vishram-ghat" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Shri Vishram Ghat Mathura</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Shri Vishram Ghat Mathura</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Shri Vishram Ghat"
                                        width={100}
                                        height={100}
                                        loading="lazy" // Explicit lazy loading
                                    />
                                    <div className="d-block">
                                        <span className="d-block">by GIG Mathura</span>
                                        <span className="d-block text-muted">28th Dec. 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogSection}>
                                <p>
                                    Nestled on the serene banks of the Yamuna River, Shri Vishram Ghat is one of the most revered sites in Mathura. Known
                                    for its tranquil environment and spiritual allure, this ghat is deeply intertwined with the legend of Lord Krishna, who
                                    is believed to have rested here after slaying the demon Kansa. A visit to this sacred ghat offers a perfect blend of
                                    peace, devotion, and heritage.
                                </p>

                                <Image
                                    src="https://mathuravrindavantourism.co.in/images/places-to-visit/headers/vishram-ghat-mathura-tourism-entry-fee-timings-holidays-reviews-header.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Shri Vishram Ghat, Mathura"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>
                                    Shri Vishram Ghat holds a pivotal place in the history of Mathura. It is the very spot where Lord Krishna rested after liberating Mathura from the tyranny of his uncle, King Kansa. The word “Vishram” translates to “rest,” signifying the divine pause Krishna took here. 
                                    The ghat is also associated with various rituals, especially the Yamuna Aarti, a mesmerizing ceremony performed daily to honor the sacred river.
                                    <br />
                                    #Trivia: Shri Vishram Ghat is considered the starting and ending point of the traditional parikrama (circumambulation) of Mathura.
                                </p>

                                <h2>Architectural Beauty</h2>
                                <p>
                                    Surrounded by over 25 small temples dedicated to various deities, Vishram Ghat exudes an ethereal charm. The stone ghats, adorned with carvings and motifs, are a testament to the architectural style of ancient India. The ghat comes alive in the evening during the aarti, as the golden hues of oil lamps reflect beautifully on the calm waters of the Yamuna.
                                </p>

                                <Image
                                    src="https://mathuravrindavantourism.co.in/images//tourist-places/vishram-ghat-mathura/vishram-ghat-mathura-tourism-photo-gallery.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Aarti at Vishram Ghat"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Rituals</h2>
                                <p>
                                    <strong>Yamuna Aarti:</strong> The highlight of Shri Vishram Ghat is the Yamuna Aarti, held every evening. Devotees gather in large numbers to witness this divine spectacle, as priests chant hymns and light diyas, offering them to the Yamuna River. The air is filled with the fragrance of flowers and incense, creating an otherworldly experience.
                                </p>
                                <p>
                                    <strong>Diwali Celebration:</strong> The ghat is beautifully decorated during Diwali, with thousands of lamps illuminating the area, symbolizing the triumph of light over darkness. Special prayers are conducted to invoke blessings from the goddess Yamuna.
                                </p>

                                <h2>Nearby Attractions</h2>
                                <p>
                                    Shri Vishram Ghat serves as a gateway to explore Mathura&apos;s other spiritual sites. Adjacent temples like Dwarkadheesh Temple and Yamuna-Krishna temples add to the devotional vibe of the place. Visitors can also take boat rides to experience the scenic beauty of the Yamuna River.
                                </p>

                                <h2>How to Reach Shri Vishram Ghat?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Mathura Bus Stand, approximately 4 kilometers away.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction, about 4.5 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport, around 60 kilometers away.</p>
                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>
                                <h2>Why Visit Shri Vishram Ghat?</h2>
                                <p>
                                    Whether you&apos;re seeking spiritual solace or historical insights, Shri Vishram Ghat offers an unparalleled experience. The calmness of the Yamuna, coupled with the divine aura of the ghat, makes it a must-visit destination for all.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://www.google.com/maps/place/Vishram+Ghat/@27.5047661,77.6760588,15z/data=!4m10!1m2!2m1!1svishram+ghat+mathura!3m6!1s0x39737108626b579b:0x5b8c8709ea36eaf8!8m2!3d27.5047661!4d77.6863585!15sChR2aXNocmFtIGdoYXQgbWF0aHVyYVoWIhR2aXNocmFtIGdoYXQgbWF0aHVyYZIBFXJlbGlnaW91c19kZXN0aW5hdGlvbuABAA!16s%2Fm%2F0660s2q?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                                        className="text-center w-100"
                                    >
                                        View On Map
                                    </Link>
                                </div>
                            </div>

                            <hr />
                            <div className={`${styles.share} text-center d-flex align-items-center justify-content-center flex-column`}>
                                <div className="mr-3">
                                    Planning Your Holy Trip?
                                    <p className="text-muted m-0 text-center mb-2" style={{ fontSize: '2vmin' }}>
                                        Don&apos;t stress—everything you need is just a click away! 
                                        <span style={{ color: 'green' }}> See our exclusive offerings.</span>
                                        <span style={{ color: 'red' }}>
                                            <br />
                                            Personalize your Darshan for FREE!
                                        </span>
                                    </p>
                                </div>
                                <Link href="/" className="btn btn-danger">
                                    Plan Your Darshan Now!
                                </Link>
                            </div>

                            <hr />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ShriVishramGhatMathura;
