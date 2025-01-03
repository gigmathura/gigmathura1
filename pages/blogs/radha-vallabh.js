import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ShriRadhaVallabhJiTemple = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Shri Radha Vallabh Ji Temple in Vrindavan, a treasure of devotion to Radha and Krishna. Discover its serene atmosphere and rich traditions." />
                <meta name="keywords" content="Vrindavan, Shri Radha Vallabh Ji Temple, Radha Krishna temple, Vrindavan tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Vrindavan" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Shri Radha Vallabh Ji Temple Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Shri Radha Vallabh Ji Temple</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Shri Radha Vallabh Ji Temple"
                                        width={100}
                                        height={100}
                                        loading="lazy" // Explicit lazy loading
                                    />
                                    <div className="d-block">
                                        <span className="d-block">by GIG Vrindavan</span>
                                        <span className="d-block text-muted">28th Dec. 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogSection}>
                                <p>
                                    Nestled in the spiritual heart of Vrindavan, Shri Radha Vallabh Ji Temple stands as a timeless tribute to the eternal love
                                    of Radha and Krishna. Renowned for its spiritual serenity and artistic grandeur, this temple draws devotees and seekers
                                    from across the globe.
                                </p>

                                <Image
                                    src="https://cdn1.prayagsamagam.com/media/2023/05/06161805/Shri-Radha-Vallabh-Temple-Vrindavan-4.webp" // Replace with actual image URL
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Shri Radha Vallabh Ji Temple"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>
                                    Founded in the 16th century by Shri Harivansh Mahaprabhu, the temple is a cornerstone of the Radha Vallabh tradition within
                                    the Bhakti movement. It embodies the divine essence of Radha Rani and Krishna&apos;s relationship, making it a pivotal
                                    spiritual landmark. The original deity, known as Radha Vallabh Lal, has been the centerpiece of devotion for centuries.
                                </p>

                                <h2>Architectural Grandeur</h2>
                                <p>
                                    The temple showcases exemplary Rajasthani and Mughal architectural styles. Its intricate carvings, majestic domes,
                                    and detailed lattice work narrate tales of devotion and artistic finesse. The sanctum sanctorum houses the idol of Shri Radha Vallabh Ji, exuding divine energy.
                                </p>
                                <Image
                                    src="https://exploreouting.com/images/poi_images/ATTR_1077_1502189756_1.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    The temple becomes a hub of celebration during <strong>Radhashtami</strong> and <strong>Janmashtami</strong>. Thousands of devotees
                                    gather to witness the grand festivities, including devotional singing, dance performances, and elaborate rituals.
                                </p>
                                <Image
                                    src="https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/shri-radhavallabh-divine-pastimes-m.jpeg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                                <h2>How to Reach Shri Radha Vallabh Ji Temple?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand is just 2 kilometers away.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction is located around 11 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport is about 70 kilometers away.</p>

                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Why Visit Shri Radha Vallabh Ji Temple?</h2>
                                <p>
                                    Shri Radha Vallabh Ji Temple is a sanctuary of divine love and devotion. Its serene atmosphere, coupled with its
                                    rich heritage, offers a transcendent experience. Whether seeking spiritual solace or admiring architectural beauty,
                                    this temple is a must-visit destination for all.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/2zc6acPTbJtDZT3RA"
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

export default ShriRadhaVallabhJiTemple;
