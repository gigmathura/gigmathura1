import Navbar from '../../components/Navbar.js'; 
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; 
import styles from '../../styles/Blog.module.css'; 
import Link from 'next/link.js';

const RadhaRaniTempleBarsana = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Discover the divine beauty of Radha Rani Temple in Barsana, the sacred abode of Radha Rani. Explore its history, architecture, and spiritual significance." />
                <meta name="keywords" content="Barsana, Radha Rani Temple, temples in Barsana, Radha Krishna temples, Barsana tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Radha Rani Temple Barsana</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Radha Rani Temple Barsana</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Radha Rani Temple Barsana"
                                        width={100}
                                        height={100}
                                        loading="lazy" 
                                    />
                                    <div className="d-block">
                                        <span className="d-block">by GIG Mathura</span>
                                        <span className="d-block text-muted">28th Dec. 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogSection}>
                                <p>
                                    Nestled amidst the lush green hills of Barsana, Radha Rani Temple is one of the most revered shrines dedicated to Goddess Radha. This sacred site attracts thousands of devotees every year who seek blessings and wish to connect with the divine love of Radha and Krishna.
                                </p>

                                <Image
                                    src="https://asoulwindow.com/wp-content/uploads/2022/03/Shri-Radha-Rani-Mahal-Barsana-Uttar-Pradesh-1024x768.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Radha Rani Temple Barsana"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>
                                    The Radha Rani Temple, also known as Shriji Mandir, is believed to be built in the early 16th century. The temple is perched atop the Bhanugarh hill, a serene and tranquil location that resonates with spiritual energy. It is said to be the birthplace of Goddess Radha, the eternal consort of Lord Krishna. This temple holds immense importance in the Braj region and is a focal point during the celebration of Radha Ashtami, the birthday of Goddess Radha.
                                </p>

                                <h2>Architectural Grandeur</h2>
                                <p>
                                    The architecture of Radha Rani Temple is a blend of Rajasthani and Mughal styles. The intricate carvings and grand arches add to the visual appeal of the temple. The sanctum houses a beautifully adorned idol of Radha Rani, decked with jewels and vibrant attire. The temple&apos;s surroundings provide breathtaking views of Barsana&apos;s countryside, making it a perfect spot for meditation and introspection.
                                </p>

                                <Image
                                    src="https://staticimg.amarujala.com/assets/images/2020/07/22/radha-rani-mandir-barsana_1595414403.jpeg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Radha Ashtami:</strong> This festival marks the birth of Goddess Radha and is celebrated with great enthusiasm. Devotees gather in large numbers to witness the grand aarti and participate in kirtans. The temple is adorned with flowers and lights, creating a divine ambiance.
                                </p>
                                <p>
                                    <strong>Lathmar Holi:</strong> The Radha Rani Temple is the center of the famous Lathmar Holi celebration in Barsana, where women playfully beat men with sticks while singing traditional songs. It&apos;s a unique and colorful tradition that attracts visitors from all over the world.
                                </p>

                                <h2>Shri Ladli Ji Darshan Timings</h2>
                                <p>
                                In Summer the Radha rani temple is open daily from <strong>5:00 AM to 12:00 PM</strong> and <strong>4:00 PM to 9:30 PM</strong>.
                                <br/>
                                In Winter the Radha rani temple is open daily from <strong>5:30 AM to 12:00 PM</strong> and <strong>3:00 PM to 8:30 PM</strong>.
                                </p>
                                <Image
                                    src="https://gharmandir.in/wp-content/uploads/2024/09/Untitled-design-20-e1725536704725.png"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                                <h2>How to Reach Radha Rani Temple?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Barsana Bus Stand is just 2 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction is located around 50 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport is approximately 120 kilometers away. Delhi&apos;s Indira Gandhi International Airport is around 170 kilometers away.</p>

                                <p>
                                    If you&apos;re planning to visit Mathura, Vrindavan, Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Cuisines to Try Near the Temple</h2>
                                <p>
                                    Barsana offers a range of traditional dishes, including Makhan Mishri, Rabri, Jalebi, and Kachori. Local eateries near the temple serve delicious vegetarian meals that provide a true taste of the Braj region&apos;s culinary heritage.
                                </p>

                                <h2>Why Visit Radha Rani Temple?</h2>
                                <p>
                                    Radha Rani Temple is not just a place of worship; it is an experience of divine love and devotion. The tranquil surroundings, combined with the temple&apos;s spiritual essence, make it a must-visit destination for those seeking peace and blessings.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/vRCbgnpX5WLfAeX6A"
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
                                        Dive into the sacred heritage of Barsana!
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

export default RadhaRaniTempleBarsana;
