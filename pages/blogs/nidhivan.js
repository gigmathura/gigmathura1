import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const NidhivanVrindavan = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Nidhivan, the mystical and sacred grove of Vrindavan, where divine legends of Lord Krishna and Radha come alive. Discover its spiritual significance and unique stories." />
                <meta name="keywords" content="Vrindavan, Nidhivan, Lord Krishna, Radha, temples in Vrindavan, Krishna leela, Vrindavan tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Nidhivan Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Nidhivan Vrindavan</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Nidhivan Vrindavan"
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
                                    Nidhivan, located in the heart of Vrindavan, is one of the most revered and mystical places for devotees of Lord Krishna.
                                    Shrouded in divine legends, it is believed to be the sacred grove where Krishna performed the enchanting Raas Leela with Radha
                                    and the Gopis. The air of Nidhivan carries a sense of mystery, devotion, and unparalleled spiritual energy.
                                </p>

                                <Image
                                    src="https://mathuravrindavantourism.co.in/images/places-to-visit/headers/seva-kunj-and-nidhuban-vrindavan-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Nidhivan Vrindavan"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Legends of Nidhivan</h2>
                                <p>
                                    Nidhivan is considered a mystical place where, according to popular belief, Lord Krishna performs Raas Leela every night.
                                    The dense forest is filled with trees shaped like entwined lovers, symbolizing eternal devotion. It is said that no living
                                    being—be it humans or animals—can remain within Nidhivan after sunset. Locals believe that anyone who dares to witness the
                                    divine Raas Leela either loses their sanity or passes away.
                                    <br />
                                    #Trivia: The sacred site remains locked every evening after the evening aarti, and offerings like paan, sweets, and water
                                    are placed for Krishna and Radha before the doors are closed.
                                </p>

                                <h2>Architectural and Natural Wonders</h2>
                                <p>
                                    Nidhivan&apos;s natural beauty is unparalleled. The trees here are of a unique kind, with hollow trunks and intertwined branches.
                                    The forest is home to the famous Rang Mahal, a small temple where it is believed Radha prepares for Raas Leela. The surrounding
                                    atmosphere is serene and exudes an aura of divinity.
                                    <br />
                                    The temple&apos;s architecture is simple yet captivating. Inside the Rang Mahal, a bed is prepared every evening for Lord Krishna and Radha,
                                    complete with ornaments and offerings.
                                </p>

                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/34/Nidhivan.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Rang Mahal Nidhivan"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Spiritual Events</h2>
                                <p>
                                    <strong>Holi Celebration:</strong> Holi at Nidhivan is an experience unlike any other. The festivities start with devotees
                                    gathering to sing bhajans and play with colors, all while celebrating the divine love of Krishna and Radha.
                                </p>
                                <p>
                                    <strong>Janmashtami:</strong> On Lord Krishna’s birthday, thousands of devotees flock to Nidhivan to experience the divine energy.
                                    Special bhajans, kirtans, and aarti are organized to mark this occasion.
                                </p>
                                <Image
                                    src="https://shrimathuraji.com/wp-content/uploads/2024/04/nidhivan-temples-vrindavan.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Rang Mahal Nidhivan"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                                <h2>Visiting Hours and Guidelines</h2>
                                <p>
                                    Nidhivan is open daily from <strong>6:00 AM to 8:00 PM</strong>. However, visitors are strictly prohibited from entering the
                                    forest after sunset due to its sacred and mysterious nature.
                                </p>

                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>How to Reach Nidhivan?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand is 2 kilometers away from Nidhivan.</p>
                                <p><strong>Nearest Railway Station:</strong> Vrindavan Railway Station is located around 3 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport is about 70 kilometers away, and Delhi&apos;s Indira Gandhi International Airport is 160 kilometers away.</p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/R7iJc1yjYqPK7rwk6"
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

export default NidhivanVrindavan;
