import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ShriRangJiTemple = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Shri Rang Ji Temple, a magnificent South Indian temple in Vrindavan. Discover its history, architecture, and cultural significance." />
                <meta name="keywords" content="Vrindavan, Shri Rang Ji Temple, South Indian temples, Vrindavan tourism, Hindu pilgrimage, Rangnath Ji Temple, Vishnu temple" />
                <meta name="author" content="GIG Vrindavan" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Shri Rang Ji Temple Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Shri Rang Ji Temple</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Shri Rang Ji Temple"
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
                                    Shri Rang Ji Temple, also known as Rangnath Ji Temple, stands as one of Vrindavan's most significant landmarks. 
                                    Dedicated to Lord Ranganatha, a form of Lord Vishnu, the temple's striking Dravidian architecture sets it apart 
                                    in the land of Braj. This sacred abode invites devotees to immerse themselves in divine serenity and culture.
                                </p>

                                <Image
                                    src="https://thetravelcurry.com/wp-content/uploads/2019/09/DSC_1249-polarr.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Shri Rang Ji Temple"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Architectural Splendor</h2>
                                <p>
                                    Shri Rang Ji Temple is renowned for its South Indian architectural style, complete with intricate carvings, 
                                    towering gopurams (gateways), and a gold-plated Dhwaja Stambha (flag pole) that stands at a height of 50 feet. 
                                    Its design blends elements of both North and South Indian temple architecture, making it a unique spiritual monument. 
                                    The temple complex features vast corridors, sacred water tanks, and vibrant murals depicting scenes from 
                                    Vishnu's incarnations.
                                </p>

                                <h2>Historical Significance</h2>
                                <p>
                                    Established in 1851 by Seth Govind Das and Seth Radha Krishna, prominent merchants of the time, Shri Rang Ji Temple 
                                    was built to honor the rich traditions of Vaishnavism. It houses the deity of Lord Ranganatha reclining on the 
                                    serpent Shesha, accompanied by Goddess Lakshmi. The temple also embraces cultural practices such as South Indian 
                                    rituals and traditions.
                                </p>

                                <Image
                                    src="https://www.jagranimages.com/images/newimg/31072022/31_07_2022-rang_ji_temple_inside_22940922.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Interior"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    Shri Rang Ji Temple is a hub for numerous vibrant celebrations. Among the most prominent is the annual Brahmotsavam, 
                                    which includes the grand chariot procession. During this festival, the deity is carried on a magnificently decorated 
                                    chariot, accompanied by music and dance performances. Another major celebration is Vaikuntha Ekadashi, marking the 
                                    opening of the Vaikuntha Dwaram (Gateway to Heaven).
                                </p>

                                <h2>Temple Timings</h2>
                                <p>
                                    The temple is open daily from <strong>6:00 AM to 11:00 AM</strong> and <strong>4:00 PM to 8:00 PM</strong>. 
                                    Special darshans are arranged during festivals, offering devotees an opportunity to witness rare rituals.
                                </p>

                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<a href='/'>Click Here to know more</a>
                                </p>

                                <h2>How to Reach Shri Rang Ji Temple?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand is just 2 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction is located around 12 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra&apos;s Kheria Airport is approximately 77 kilometers away. Delhi&apos;s Indira Gandhi International Airport is around 170 kilometers away.</p>

                                <h2>Why Visit Shri Rang Ji Temple?</h2>
                                <p>
                                    A visit to Shri Rang Ji Temple is a journey into spirituality, architecture, and history. The serene environment, 
                                    combined with the grandeur of South Indian temple traditions, makes it a must-visit destination for devotees 
                                    and travelers alike. Embrace the divine aura and immerse yourself in a rich cultural legacy.
                                </p>

                                <div className="text-center w-100">
                                    <a
                                        href="https://maps.app.goo.gl/KDBFT8fJg4b8xcCE6"
                                        className="text-center w-100"
                                    >
                                        View On Map
                                    </a>
                                </div>
                            </div>

                            <hr />
                            <div className={`${styles.share} text-center d-flex align-items-center justify-content-center flex-column`}>
                                <div className="mr-3">
                                    Planning a Visit?{' '}
                                    <p className="text-muted m-0 text-center mb-2" style={{ fontSize: '2vmin' }}>
                                        Dive into the sacred heritage of Vrindavan!
                                        <span style={{ color: 'green' }}>Embrace the Divine!</span>
                                        <span style={{ color: 'red' }}>
                                            <br />
                                            BEGIN YOUR PILGRIMAGE TODAY!
                                        </span>
                                    </p>
                                </div>
                                <Link href="/" className="btn btn-danger">
                                    Plan Now!
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

export default ShriRangJiTemple;
