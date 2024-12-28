import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ChintaharanMahadev = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore the sacred Chintaharan Mahadev Temple in Mathura. Learn about its history, spiritual significance, and divine architecture." />
                <meta name="keywords" content="Chintaharan Mahadev, Mathura temples, Hindu pilgrimage, Shiva temple, Mathura tourism" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Chintaharan Mahadev Mathura</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Chintaharan Mahadev</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Chintaharan Mahadev"
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
                                    Nestled in the vibrant city of Mathura, Chintaharan Mahadev is a renowned Shiva temple that draws devotees from
                                    far and wide. Known for its divine atmosphere and spiritual energy, the temple is a symbol of Lord Shiva&apos;s grace
                                    in alleviating worries and granting peace.
                                </p>

                                <Image
                                    src="https://www.jagranimages.com/images/newimg/17072022/17_07_2022-chinta_harn_mandir_mathura_22899486.webp"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Chintaharan Mahadev"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>This ghat lies on the bank of Shree Yamuna near BrahmandGhat to its east. Chintaharan Mahadev, who is worshipped by the Brijwasis, is present here. When Mother Yashoda saw the universes in Kanhaiya&apos;s mouth, she became extremely anxious for His welfare and prayed to ChintaharanMahadev for Krishna&apos;s safety. Chintaharan means “removing anxieties”.
                                    Chintaharan Mahadev Temple has a profound history intertwined with faith and devotion. It is believed that Lord Shiva
                                    appeared here to relieve the people of their worries (&quot;Chinta&quot; in Sanskrit). The temple is an ancient site, serving
                                    as a beacon of hope and tranquility for centuries. The temple&apos;s origins are rooted in mythological lore, with devotees
                                    recounting tales of Lord Shiva&apos;s divine interventions.
                                </p>

                                <h2>Architectural Marvel</h2>
                                <p>
                                    The temple boasts stunning architecture reflective of traditional Indian temple designs. From its towering spire to
                                    intricately carved sanctum walls, the temple is a visual delight. The main sanctum houses a magnificent Shiva Linga,
                                    adorned daily with flowers and offerings. The serene courtyard and surrounding structures further enhance the spiritual
                                    ambiance.
                                </p>
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrTYy5t85q8kMA5gEgq3AGAE9_KZ8e3k4jA&s"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Maha Shivratri:</strong> Chintaharan Mahadev Temple is a hub of activity during <strong>Maha Shivratri</strong>, the grand festival dedicated to
                                    Lord Shiva. The temple is beautifully decorated, and devotees gather in large numbers to offer prayers, chant mantras,
                                    and perform rituals throughout the night.
                                </p>
                                <p>
                                    <strong>Shravan Month:</strong> The holy month of Shravan sees an influx of devotees, as Mondays are considered
                                    particularly auspicious for worshiping Lord Shiva. Special rituals and offerings mark this period.
                                </p>

                                <h2>Temple Timings</h2>
                                <p>
                                    In Summers The temple opens daily from <strong>5:00 AM to 12:00 PM</strong> and again from <strong>2:00 PM to 09:00 PM</strong>
                                    <br />
                                    In Winters The temple opens daily from <strong>5:30 AM to 12:00 PM</strong> and again from <strong>2:00 PM to 08:30 PM</strong>

                                    <br />
                                </p>

                                <Image
                                    src="https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/62ea7d8bed5c5b0009581e8a.jpeg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Chintaharan Mahadev at Night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Chintaharan Mahadev?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Mathura Bus Stand is approximately 4 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction, located around 3.5 kilometers away, provides convenient access.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport is the closest, about 65 kilometers away. Delhi&apos;s Indira Gandhi International Airport is around 150 kilometers away.
                                </p>

                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Local Delicacies to Relish</h2>
                                <p>
                                    Mathura is famous for its Peda, a delicious sweet made from condensed milk. Other must-try dishes include Kachori,
                                    Jalebi, and Lassi. Several eateries near the temple offer traditional North Indian meals that will delight your taste buds.
                                </p>

                                <h2>Why Visit Chintaharan Mahadev?</h2>
                                <p>
                                    Chintaharan Mahadev is not just a temple but a sanctuary for the soul. The divine vibrations and rich cultural heritage
                                    make it a must-visit destination for spiritual seekers and history enthusiasts alike.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://www.google.com/maps/place/chintaharan+mahadev+mathura/data=!4m2!3m1!1s0x3973717b42e405bd:0xd6bf5cb1a13b8d28?sa=X&ved=1t:155783&ictx=111"
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
                                        Experience the divine serenity of Mathura!
                                        <span style={{ color: 'green' }}>Find Peace!</span>
                                        <span style={{ color: 'red' }}>
                                            <br />
                                            BEGIN YOUR SPIRITUAL JOURNEY TODAY!
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

export default ChintaharanMahadev;
