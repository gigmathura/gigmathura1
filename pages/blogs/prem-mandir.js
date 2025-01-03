import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const PremMandirVrindavan = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore the grandeur of Prem Mandir Vrindavan, a divine symbol of love and devotion. Discover its architecture, spiritual importance, and mesmerizing evening shows." />
                <meta name="keywords" content="Vrindavan, Prem Mandir, Radha Krishna, Hindu temple, Vrindavan tourism, spiritual destination, Indian architecture" />
                <meta name="author" content="GIG Vrindavan" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Prem Mandir Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Prem Mandir Vrindavan</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Prem Mandir Vrindavan"
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
                                    Nestled in the sacred town of Vrindavan, Prem Mandir is a monumental temple dedicated to the divine love of Radha Krishna.
                                    This architectural marvel, established by Jagadguru Kripalu Maharaj, attracts millions of devotees and tourists annually.
                                    Known for its pristine white marble structure and intricate carvings, Prem Mandir stands as a testimony to devotion, love, and artistry.
                                </p>

                                <Image
                                    src="https://vrindavan.com/wp-content/uploads/2022/10/prem-mandir-vrindavan-1024x576.jpeg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Prem Mandir Front View"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Architectural Splendor</h2>
                                <p>
                                    Prem Mandir&apos;s architecture is a mesmerizing blend of traditional Indian and modern design elements. Built entirely from
                                    Italian white marble, the temple features intricate carvings depicting scenes from Radha Krishna&apos;s life and the ten
                                    avatars of Lord Vishnu. The temple is illuminated with colorful lights during the evening, creating a surreal ambiance.
                                    <br />
                                    The sprawling temple complex includes beautifully landscaped gardens, musical fountains, and depictions of Krishna
                                    Leelas like the Govardhan Leela and Ras Leela. The central sanctum houses the idols of Radha Krishna on the first floor
                                    and Sita Ram on the ground floor, each radiating divine grace and serenity.
                                </p>

                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/PremMandirSideViewFromCanteen.jpg/640px-PremMandirSideViewFromCanteen.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Spiritual Significance</h2>
                                <p>
                                    Prem Mandir is not just a place of worship but also a hub of spiritual learning and devotion. The temple symbolizes
                                    unconditional love, emphasizing the teachings of Bhakti Yoga. Devotees and visitors experience peace and divine
                                    connection while exploring the serene environment and meditating in the temple&apos;s sanctified spaces.
                                    e on the outskirts of Vrindavan and is dedicated to Lord Radha Krishna and Sita Ram, Radha Krishna on the first level, and Sita Ram on the second level. The temple structure was established by the fifth Jagadguru, Kripalu Maharaj. Figures of Shri Krishna and his followers depicting important events surrounding the Lord&apos;s existence cover the main temple. Construction began in January 2001 and the inauguration ceremony took place from 15 February to 17 February 2012. The temple was opened to the public on 17 February. The cost was 150 crore rupees ($23 million). The presiding deities are Shri Radha Govind (Radha Krishna) and Shri Sita Ram. A 73,000 square feet, pillar-less, dome-shaped Satsang hall is being constructed next to Prem Mandir, which will accommodate 25,000 people at a time. Surrounded by beautiful gardens and fountains, the temple complex has life-size depictions of four levels of Shri Krishna Jhulan Leela, Govardhan Leela, Raas Leela, and Kaliya Naag Leela. It is the sister temple of Bhakti Mandir which was opened in 2005 and another sister temple which is known as Kirti Mandir, Barsana opened in 2019.
                                </p>

                                <h2>Festivals and Events</h2>
                                <p>
                                    <strong>Janmashtami Celebration:</strong> The temple is a focal point for grand celebrations during Janmashtami,
                                    Krishna&apos;s birthday. Devotees gather for kirtans, bhajans, and a spectacular midnight aarti. The temple is adorned
                                    with flowers and lights, enhancing its beauty.
                                    <br />
                                    <strong>Radhashtami:</strong> Celebrating the birth of Radha Rani, this festival is marked by elaborate decorations
                                    and cultural programs. Devotees participate in special prayers and rituals.
                                </p>

                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bd5e0M_fqM9vNxv8YY0Q7vrSiDOnMzv9O2l3d1Dtd2Q9_N4HnqlcsewAPHIUz7aEpig&usqp=CAU"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Evening View of Prem Mandir"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Prem Mandir Darshan and Arti Timings</h2>
                                <p>
                                    The temple is open daily from <strong>8:30 AM to 12:00 PM</strong> and <strong>4:30 PM to 8:30 PM</strong>.

                                    <br />
                                    Arti: 05:30 AM, 08:30 AM, 11:50 AM, 04:30 PM and 08:10 PM
                                    <br />
                                    Bhog: 06:10 AM, 11:30 AM and 05:30 PM
                                    <br />
                                    Musical Fountain Show : 07:30 PM-08:00 PM in Summer and 07:00 PM-07:30 PM in Winter
                                    <br />
                                    <strong>Best Time to Visit:</strong> Early mornings and evenings are ideal for a peaceful darshan and to witness
                                    the temple illuminated with vibrant lights.
                                </p>

                                <p>
                                    If you&apos;re planning to visit Mathura, Vrindavan, Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>How to Reach Prem Mandir?</h2>
                                <p>
                                    <strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand is just 2 kilometers away.
                                    <br />
                                    <strong>Nearest Railway Station:</strong> Mathura Junction is located around 12 kilometers away.
                                    <br />
                                    <strong>Nearest Airport:</strong> Agra Airport is approximately 70 kilometers away, while Delhi&apos;s Indira Gandhi
                                    International Airport is around 160 kilometers away.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/b3fFHgQ1onbrQKCWA"
                                        className="text-center w-100"
                                    >
                                        View On Map
                                    </Link>
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
            </div>

            <Footer />
        </>
    );
};

export default PremMandirVrindavan;
