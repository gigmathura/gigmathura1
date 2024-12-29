import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image';
import styles from '../../styles/Blog.module.css';
import Link from 'next/link.js';

const SeeshMahalVrindavan = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Discover the Seesh Mahal in Vrindavan, a unique masterpiece known for its intricate mirror work and spiritual aura. Explore its history, architecture, and cultural significance." />
                <meta name="keywords" content="Vrindavan, Seesh Mahal, mirror palace, temples in Vrindavan, Vrindavan tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Vrindavan" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Seesh Mahal Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Seesh Mahal, Vrindavan</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Seesh Mahal"
                                        width={100}
                                        height={100}
                                        loading="lazy"
                                    />
                                    <div className="d-block">
                                        <span className="d-block">by GIG Vrindavan</span>
                                        <span className="d-block text-muted">28th Dec. 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogSection}>
                                <p>
                                    Nestled in the spiritual town of Vrindavan, the Seesh Mahal is a stunning architectural gem renowned for its intricate
                                    mirror work and serene ambiance. This exquisite monument reflects the divine artistry and devotion associated with Lord
                                    Krishna&apos;s life, making it a must-visit destination for pilgrims and art enthusiasts alike.
                                </p>

                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWq1YGVt2GZGOgJ_r-1OCP9IsRJPri4xDJww&s"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Seesh Mahal"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>
                                    The Seesh Mahal holds a unique place in Vrindavan&apos;s rich tapestry of heritage. Built during the reign of local rulers, the
                                    palace was designed as a space for spiritual reflection and celebration. It is believed to have been a venue for royal
                                    ceremonies and devotional gatherings, embodying the essence of Krishna&apos;s playful and divine persona.

                                    The elaborate mirror work symbolizes the infinite reflections of Krishna&apos;s divine play, inspiring countless devotees to
                                    connect with their spiritual roots.
                                </p>

                                <h2>Architectural Marvel</h2>
                                <p>
                                    A marvel of craftsmanship, the Seesh Mahal is adorned with thousands of tiny, intricately placed mirrors that create a
                                    kaleidoscope effect under the light. The palace&apos;s walls and ceilings are embellished with murals and motifs depicting
                                    scenes from Lord Krishna&apos;s life, while the vibrant colors add to the temple&apos;s enchanting atmosphere.

                                    Visitors are captivated by the symmetrical designs and the interplay of light, which gives the palace its iconic shimmer
                                    and aura.
                                </p>
                                <Image
                                    src="https://i.ytimg.com/vi/wuwkFO-a9OA/maxresdefault.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Seesh Mahal Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Events</h2>
                                <p>
                                    The Seesh Mahal comes alive during festivals like Janmashtami and Radhashtami. Devotional songs, vibrant decorations,
                                    and spiritual discourses fill the air, creating a divine experience for visitors. Special lighting during these events
                                    enhances the beauty of the mirror work, leaving devotees spellbound.

                                    On regular days, the palace serves as a tranquil retreat where visitors can meditate and soak in the peaceful vibes of
                                    Vrindavan.
                                </p>

                                <h2>Visiting Hours</h2>
                                <p>
                                    The Seesh Mahal is open daily from <strong>6:00 AM to 8:00 PM</strong>. Early mornings and evenings are the best times
                                    to visit for a serene experience. Guided tours are available to provide insights into the history and significance of
                                    the palace.
                                </p>

                                <Image
                                    src="https://i.ytimg.com/vi/DCky_46uoa0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCnwf8inWGVaaKJQNOOAiRGsNRRw"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Seesh Mahal at Night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Seesh Mahal?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand, approximately 2 kilometers away.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction, around 12 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra&apos;s Kheria Airport, about 80 kilometers from Vrindavan.</p>
                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Local Cuisine</h2>
                                <p>
                                    Vrindavan&apos;s culinary scene is a delight for food lovers. Indulge in traditional sweets like Rabri and Malpua, or savor the
                                    flavors of local snacks like Kachori and Aloo Puri. Nearby eateries also offer authentic North Indian thalis and street
                                    food to complete your visit.
                                </p>

                                <h2>Why Visit Seesh Mahal?</h2>
                                <p>
                                    Whether you&apos;re an art enthusiast or a spiritual seeker, Seesh Mahal offers an experience like no other. Its unique
                                    architecture, serene environment, and cultural significance make it a must-visit destination in Vrindavan.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/DpN6sMRqLTr1kUDu9"
                                        className="text-center w-100"
                                    >
                                        View On Map
                                    </Link>
                                </div>
                            </div>

                            <hr />
                            <div className={`${styles.share} text-center d-flex align-items-center justify-content-center flex-column`}>
                                <div className="mr-3">
                                    Planning a Visit?
                                    <p className="text-muted m-0 text-center mb-2" style={{ fontSize: '2vmin' }}>
                                        Explore the mesmerizing beauty of Seesh Mahal!
                                        <span style={{ color: 'green' }}>Uncover the Divine!</span>
                                        <span style={{ color: 'red' }}>
                                            <br />
                                            BEGIN YOUR JOURNEY TODAY!
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

export default SeeshMahalVrindavan;
