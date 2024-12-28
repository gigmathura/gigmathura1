import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const BrahmandGateGokul = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore the majestic Brahmand Gate in Gokul, Mathura. Learn about its history, architecture, and spiritual essence in the heart of Krishna&apos;s Leela Bhoomi." />
                <meta name="keywords" content="Mathura, Brahmand Gate, Gokul, Krishna Leela, temples in Mathura, Krishna architecture, Mathura tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Brahmand Gate, Gokul Mathura</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Brahmand Gate, Gokul</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Brahmand Gate Gokul"
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
                                    Nestled in the serene town of Gokul in Mathura, the Brahmand Gate is a monumental structure symbolizing the divine
                                    acts of Lord Krishna. It stands as a testament to Krishna&apos;s cosmic play, especially the famous episode where
                                    little Krishna revealed the entire universe in his mouth to Yashoda Mata. This iconic gateway draws pilgrims and
                                    tourists alike, marveling at its grandeur and the story it embodies.
                                </p>

                                <Image
                                    src="https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/630f410176f34f0009b100fa.jpeg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Brahmand Gate Gokul"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical and Mythological Significance</h2>
                                <p>
                                    The Brahmand Gate is rooted in the profound lore of Lord Krishna&apos;s childhood. According to Srimad Bhagavatam,
                                    when Krishna consumed dirt during his playful activities, Yashoda Mata scolded him. Upon asking him to open his
                                    mouth, she witnessed the entire cosmos:- the universe, celestial bodies, and realms of existence within Krishna&apos;s
                                    tiny mouth. This divine vision overwhelmed Yashoda with awe and love.
                                    <br />
                                    #Trivia: This episode of &quot;Brahmand Darshan&quot; is the inspiration behind the name of this magnificent gate.
                                    Visitors come to experience the palpable divinity and connect with Krishna&apos;s playful and mystical nature.
                                </p>

                                <h2>Architectural Splendor</h2>
                                <p>
                                    The Brahmand Gate is a blend of traditional Indian architectural styles and modern embellishments. Intricately
                                    carved sculptures depict episodes from Krishna&apos;s Leelas, while the vibrant paintings bring the stories alive.
                                    The gate&apos;s massive structure and ornate arches evoke a sense of grandeur and devotion.
                                    <br />
                                    At the top of the gate, there&apos;s a depiction of Yashoda holding Krishna, symbolizing her unconditional maternal
                                    love. Surrounding the gate are lush gardens that enhance the spiritual ambiance, making it a serene spot for reflection.
                                </p>

                                <Image
                                    src="https://shrimathuraji.com/wp-content/uploads/2024/06/brahmand-ghat-gokul1.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Brahmand Gate Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Events</h2>
                                <p>
                                    <strong>Janmashtami:</strong> The Brahmand Gate becomes the centerpiece during Krishna Janmashtami celebrations.
                                    The entire area is adorned with lights and flowers, with cultural performances reenacting Krishna&apos;s divine plays.
                                </p>
                                <p>
                                    <strong>Gokulashtami:</strong> Unique to Gokul, this festival celebrates Krishna&apos;s childhood days with fervor.
                                    Devotees gather to offer prayers and participate in the &quot;Brahmand Leela&quot; enactments.
                                </p>

                                <h2>Visiting Information</h2>
                                <p>
                                    <strong>Timings:</strong> Open daily from 6:00 AM to 8:00 PM. Early mornings and evenings offer a tranquil experience.
                                    <br />
                                    <strong>Entry Fee:</strong> Free for all visitors.
                                </p>
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHW_vrZNvDhADc21hxxGjXmOfE0yJkJglCQ&s"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Brahmand Gate at Night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Brahmand Gate?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Gokul Bus Stand is just 2 kilometers away.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction, around 12 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport, approximately 70 kilometers away. Alternatively, Delhi&apos;s IGI Airport is 165 kilometers away.</p>

                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Cuisine to Relish Nearby</h2>
                                <p>
                                    Savor traditional Mathura sweets like Pede, alongside local delicacies like Kachoris and Aloo Tikki. 
                                    Famous eateries include Gokul Mithaiwala and Krishna Bhojanalay within walking distance.
                                </p>

                                <h2>Why Visit Brahmand Gate?</h2>
                                <p>
                                    A visit to Brahmand Gate is not just about witnessing a monumental structure; it&apos;s an invitation to delve into Krishna&apos;s
                                    divine narrative and experience his cosmic presence. The tranquil environment and profound history make it a must-visit
                                    destination for spiritual seekers and history enthusiasts alike.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://www.google.com/maps/place/Brahmand+Ghat/@27.4170609,77.744754,17z/data=!3m1!4b1!4m6!3m5!1s0x397377ec3da0d4e9:0x9d8c591532e2edb0!8m2!3d27.4170609!4d77.744754!16s%2Fg%2F11vhtg1y1_?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
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
                                        Witness Krishna&apos;s Cosmic Leelas!
                                        <span style={{ color: 'green' }}>Feel the Divine!</span>
                                        <span style={{ color: 'red' }}>
                                            <br />
                                            START YOUR SPIRITUAL JOURNEY!
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

export default BrahmandGateGokul;
