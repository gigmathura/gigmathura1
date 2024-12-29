import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const IskconTempleVrindavan = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore ISKCON Temple Vrindavan, a hub of spirituality and devotion. Learn about its architectural beauty, festivals, and cultural significance." />
                <meta name="keywords" content="Vrindavan, ISKCON Temple, Krishna Balram temple, Vrindavan tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>ISKCON Temple Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>ISKCON Temple Vrindavan</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="ISKCON Temple Vrindavan"
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
                                    Located in the heart of Vrindavan, the ISKCON Temple, also known as Sri Krishna-Balaram Mandir, is a spiritual sanctuary that attracts devotees from across the globe. Established in 1975 by the founder of ISKCON, Srila Prabhupada, the temple is dedicated to Lord Krishna and Balaram, symbolizing divine brotherhood.
                                </p>

                                <Image
                                    src="https://luxevista.in/wp-content/uploads/2024/01/Sri-Sri-Krishna-Balaram-Mandir-ISKCON-Vrindavan.png"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="ISKCON Temple Vrindavan"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Spiritual Significance</h2>
                                <p>
                                    The ISKCON Temple serves as a beacon of spirituality and devotion. It promotes the teachings of the Bhagavad Gita and the Srimad Bhagavatam, emphasizing the importance of bhakti (devotion) in achieving spiritual enlightenment. Visitors often describe their experience at the temple as transformative, feeling a profound connection to Lord Krishna&apos;h         s eternal teachings.
                                    <br />
                                    The temple&apos;s serene ambiance, paired with melodious kirtans and chants, provides an immersive spiritual experience. Pilgrims and tourists alike find solace in the temple&apos;s daily rituals and aarti ceremonies.
                                </p>
                                <h2>History of Krishna Balaram Mandir / ISKCON Vrindavan</h2>

                                <p>The International society for Krishna Consciousness (ISKCON) was founded in New York City in 1966 by Shri A. C. Bhaktivedanta Swami Prabhupada with an aim to spread the divine message of Sri Chaitanya Mahaprabhu.

                                    The principles and practices followed by ISKCON are based on the percepts laid down by Sri Chaitanya Mahaprabhu (1486-1532) along with His brother Nityananada Prabhu and six of His principal associates, the Goswamis of Vrindavan namely Santana, Rupa, Jiva, Gopal Bhatta, Raghunatha Dasa and Raghunatha Bhatta.</p>
                                <h2>Architectural Marvel</h2>
                                <p>
                                    The ISKCON Temple&apos;s architecture is a blend of traditional Indian and modern design. The grand white marble structure is adorned with intricate carvings depicting scenes from Lord Krishna&apos;s life. The main sanctum houses the deities of Krishna and Balaram, flanked by Radha-Shyamasundar and Gaura-Nitai.
                                    <br />
                                    The temple&apos;s lush gardens, fountains, and spacious courtyards add to its tranquil beauty. The main prayer hall, with its high ceilings and vibrant frescoes, provides a majestic setting for worship and meditation.
                                </p>
                                <Image
                                    src="https://static.toiimg.com/thumb/77501501/ISKCON-Vrindavan-or-Krishna-Balaram-Mandir-Vrindavan.jpg?width=1200&height=900"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="ISKCON Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Janmashtami:</strong> The ISKCON Temple is the epicenter of Janmashtami celebrations in Vrindavan. Devotees gather in large numbers to participate in the midnight aarti, kirtans, and grand feasts.
                                    <br />
                                    <strong>Radhashtami:</strong> This festival celebrates the divine appearance of Radha, Krishna&apos;s eternal consort. The temple is adorned with flowers, and special prayers are offered to Radha and Krishna.
                                    <br />
                                    <strong>Govardhan Puja:</strong> Commemorating Lord Krishna&apos;s lifting of Govardhan Hill, this festival involves grand feasts and rituals.
                                </p>

                                <h2>Temple Activities</h2>
                                <p>
                                    The ISKCON Temple conducts a range of activities to promote spiritual well-being. Daily Bhagavad Gita classes, yoga sessions, and kirtan performances are open to all visitors. The temple&apos;s Goshala (cow shelter) highlights the significance of cow protection in Vedic culture.
                                    <br />
                                    The temple also runs a mid-day meal program, providing nutritious meals to underprivileged children, embodying the spirit of seva (service).
                                </p>

                                <Image
                                    src="https://shriayodhyadhamprasadam.com/wp-content/uploads/2024/09/resized_Snapinsta.app_440372386_17941171643805584_9202863094672440258_n_1080_11zon.webp"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="ISKCON Temple Events"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>ISKCON Temple Vrindavan Darshan and Arti Timings</h2>
                                <p>
                                    In Summers, The ISKCON Temple Vrindavan timings are from <strong>4:30 AM to 12:45 PM</strong> and <strong>4:30 PM to 8:00 PM</strong>.
                                    <br />
                                    In Winters, The ISKCON Temple Vrindavan timings are from <strong>4:30 AM to 1:00 PM</strong> and <strong>4:00 PM to 8:15 PM</strong>.

                                    <br />
                                    <strong>Mangal Aarti:</strong> 5:00 AM
                                    <br />
                                    <strong>Tulsi Aarti:</strong> 5:30 AM
                                    <br />
                                    <strong>Guru Puja:</strong> 7:15 AM
                                    <br />
                                    <strong>Pravachan:</strong> 7:30 AM
                                    <br />
                                    <strong>Shringar Aarti:</strong> 8:30 AM
                                    <br />
                                    <strong>Rajbhog Aarti:</strong> 12:00 PM
                                    <br />
                                    <strong>Dhoop Aarti:</strong> 4:30 PM
                                    <br />
                                    <strong>Sandhya Aarti:</strong> 6:30 PM
                                    <br />
                                    <strong>Geeta Pravachan:</strong> 7:30 PM
                                    <br />
                                    <strong>Sayan Arti:</strong> 8:00 PM
                                    <br />
                                    Visitors are advised to dress modestly and maintain decorum within the temple premises.
                                </p>

                                <p>
                                    If you&apos;re planning to visit Mathura, Vrindavan, Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>How to Reach ISKCON Temple Vrindavan?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand is just 2 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction, approximately 12 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport, around 75 kilometers away. Delhi&apos;s Indira Gandhi International Airport is approximately 160 kilometers away.</p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/stqGREaGaSaZFy918"
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
                                        Explore the spiritual haven of Vrindavan!
                                        <span style={{ color: 'green' }}>Experience Serenity!</span>
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

export default IskconTempleVrindavan;
