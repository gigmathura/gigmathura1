import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const BhooteshwarMahadev = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Bhuteshwar Mahadev Mandir is a famous Hindu temple located in Mathura, dedicated to Lord Shiva. It is also a Shaktipeeth where Mata Sati's ringlet fell when she performed Sati." />
                <meta name="keywords" content="Mathura, Bhooteshwar Mahadev, temples in Mathura,bhooteshwar mahadev mathura,bhooteshwar, Shiva temples, India tourism" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Bhooteshwar Mahadev Temple Mathura</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Bhooteshwar Mahadev</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="bhooteshwar mahadev"
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
                                    Nestled in the heart of Mathura, the Bhooteshwar Mahadev Temple stands as a sacred abode of Lord Shiva.
                                    Revered by locals and pilgrims alike, this temple is steeped in mythology and offers a serene escape
                                    into spirituality. For us Mathura locals, Bhooteshwar Mahadev isn’t just a temple—it’s a protector,
                                    a guide, and a divine blessing.
                                </p>

                                <Image
                                    src="https://mathuravrindavantourism.co.in/images/places-to-visit/headers/bhuteshwar-mahadev-temple-mathura-header-mathura-tourism.jpg.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Bhooteshwar Mahadev Temple"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Legend of Bhooteshwar Mahadev</h2>
                                <p>
                                    The temple derives its name from its legendary role as the protector against malevolent spirits. It is believed
                                    that Lord Shiva, in his form as Bhooteshwar, safeguards the city and its residents from any harm. This rich
                                    mythological significance makes it an unmissable destination for devotees visiting Mathura.
                                    According to mythology, Mathura was established when Shatrughan slew the demon Madhu. Shatrughan, Sri Ram's younger brother, founded Mathura after the demon's murder. The Bhuteshwar Temple in Mathura has been around for thousands of years and renders a beautiful persona to the cityscape.
                                </p>

                                <h2>Architectural Beauty</h2>
                                <p>
                                    The temple showcases a stunning blend of traditional Indian architecture and spiritual ambiance. As you step
                                    into the premises, the intricately carved pillars and the sanctum housing the Shivling evoke a deep sense of
                                    reverence and awe.
                                </p>
                                <Image
                                    src="https://visitplacesindia.com/wp-content/uploads/2024/11/bhuteshwar-mahadev-temple-mathura.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="dashrath mahal"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                                <h2>Timings and Festivals</h2>
                                <p>
                                    The temple opens daily from <strong>5:00 AM to 1:00 PM</strong> and again from <strong>4:30 PM to 10:30 PM</strong>,
                                    allowing devotees ample time for darshan and prayers. The festival of Mahashivratri is celebrated with unmatched
                                    fervor, drawing large crowds to witness the grandeur of rituals and offerings dedicated to Lord Shiva.
                                </p>
                                <h2>Best Time to Visit</h2>
                                <p>
                                    Though the temple is open all year, the ideal months to visit are October to March.

                                    Devotees faithfully and lovingly offer Milk, Dahi (curd), Shahad (honey), Jal (water), and other offerings to God. However, the most beautiful aspect of this temple is the vibrations and atmosphere of the location, surrounded by birds and monkeys.
                                </p>
                                <Image
                                    src="https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/600ddf3ee06aae00092baf90.jpeg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Bhooteshwar Mahadev at night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                                <h2>How to Reach the Bhuteshwar Mahadev Temple?</h2>
                                <p><strong>Nearest Bus Stop:</strong> The Nearest bus stop to Bhuteshwar temple is the Mathura Bus Stop in Shanti Nagar. It is around 1.5 kilometres away. So it will take you about 6 minutes to reach the temple from here.</p>
                                <p><strong>Nearest Railway Station:</strong> The Bhuteshwar Mahadev Temple is around 3 kilometres from the Mathura Junction. It takes 9 minutes to reach the temple from here.</p>
                                <p><strong>Nearest Airport:</strong> There is no airport in Mathura. The nearest international airport is in Delhi. It is 147 kilometres away from Mathura.</p>
                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<a href='/'>Click Here to know more</a>
                                </p>
                                <h2>Why Visit Bhooteshwar Mahadev?</h2>
                                <p>
                                    Whether you&apos;re seeking spiritual solace, architectural marvels, or a deeper connection with mythology,
                                    Bhooteshwar Mahadev Temple offers it all. The chants of "Har Har Mahadev" resonate through the air, filling
                                    your heart with peace and devotion. For us Mathura locals, visiting this temple feels like a homecoming—a
                                    journey back to our roots and faith.
                                </p>

                                <div className="text-center w-100">
                                    <a
                                        href="https://www.google.com/maps?ll=27.499863,77.668444&z=14&t=m&hl=en-US&gl=US&mapclient=embed&cid=4911790846997250528"
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
                                        Discover the best of Mathura&apos;s spiritual treasures!
                                        <span style={{ color: 'green' }}>Don&apos;t Miss Out!</span>
                                        <span style={{ color: 'red' }}>
                                            <br />
                                            YOUR JOURNEY BEGINS HERE!
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

export default BhooteshwarMahadev;
