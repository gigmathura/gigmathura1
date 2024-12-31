import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const GovindJiTemple = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Govind dev Ji Temple in Vrindavan, a magnificent monument dedicated to Lord Krishna. Discover its rich history, architecture, and spiritual significance." />
                <meta name="keywords" content="Vrindavan, Govind Ji Temple, Krishna temple, Vrindavan tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Govind dev Ji Temple Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Govind Dev Ji, Vrindavan</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Govind Ji Temple"
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
                                    Nestled in the sacred town of Vrindavan, Govind Ji Temple stands as a testimony to devotion and architectural brilliance. Dedicated to Lord Krishna, this temple is not just a place of worship but also a marvel of 16th-century design that attracts thousands of pilgrims every year.
                                </p>

                                <Image
                                    src="https://www.trawell.in/admin/images/upload/941139133Vrindavan_Govind_Dev_Temple_Main.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Govind Ji Temple"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Background</h2>
                                <p>
                                    Govind Dev Ji Temple Vrindavan history goes back about 5,000 years. A Bengali saint, Sri Rupa Goswami, went to Vrindavan at the wishes of his master – Sri Chaitanya Mahaprabhu. It was Sri Chaitanya&apos;s desire to excavate and establish idols of Lord Krishna in many sacred sites, including Vrindavan.

                                    Rupa Goswami met a boy who guided him to the place of the idol, and then disappeared. He realised the boy was Lord Krishna himself. So, with the help of villagers, he excavated the idol. Then, he built a small shrine of Lord&apos;s Govind Dev Ji avatar.

                                    In the 16th century, Raja Man Singh of Jaipur, a general of Mughal ruler Akbar, was highly influenced by the saint. So, when Akbar was on a pilgrimage to holy Vrindavan, the Raja made this majestic temple. It is at the same place where Sri Goswami established the idol.

                                    But, when Mughal ruler Aurangzeb was destroying temples, the deity was moved to Amber.
                                </p>

                                <h2>Architectural Splendor</h2>
                                <p>
                                    The temple&apos;s unique red sandstone structure is adorned with intricate carvings and geometric patterns that reflect a fusion of cultures. The sanctum sanctorum houses a mesmerizing idol of Lord Krishna, beautifully crafted to evoke devotion and awe. The original design featured spacious halls and arches, which now provide a glimpse into the grandeur of its past. The temple's ceiling, embellished with lotus motifs and floral patterns, narrates tales of divinity and artistry.
                                </p>

                                <Image
                                    src="https://images.squarespace-cdn.com/content/v1/5bfc88d3cef372ae240195af/1550793206118-AWD441GDH8PGU7A12E3G/N-UP-A195_GovindDevTemple-SanctumInner.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    Govind Ji Temple becomes a vibrant hub of activities during festivals like Janmashtami, Holi, and Radha Ashtami. The temple is adorned with flowers and lights, and devotees gather to participate in kirtans and aarti. Janmashtami is celebrated with great zeal, featuring special midnight rituals and bhajans that resonate through the air, creating an atmosphere of divine bliss.
                                </p>

                                <h2>Darshan Timings</h2>
                                <p>
                                    The temple welcomes visitors from <strong>4:30 AM to 12:15 PM</strong> and <strong>5:30 PM to 9:15 PM</strong>. The Mangala Aarti at dawn and the evening Sandhya Aarti are must-attend events for devotees seeking a spiritually enriching experience.
                                </p>

                                <Image
                                    src="https://www.vrindavandarshanguide.com/wp-content/uploads/2023/06/govinddevji.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Govind Ji Temple Celebrations"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Govind Ji Temple?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand is about 2 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction, located 12 kilometers away, serves as the nearest railway station.</p>
                                <p><strong>Nearest Airport:</strong> The nearest airport is in Agra, approximately 75 kilometers away.</p>

                                <p>
                                    If you&apos;re planning to visit Mathura, Vrindavan, Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Cuisines to Try Near Govind Ji Temple</h2>
                                <p>
                                    Vrindavan offers a delightful culinary experience with local specialties such as Rabri, Malpua, and the famous Peda. Restaurants near the temple serve authentic vegetarian dishes, and street food stalls offer an array of flavorful chaats and sweets.
                                </p>

                                <h2>Why Visit Govind Ji Temple?</h2>
                                <p>
                                    Whether you&apos;re a devotee or a history enthusiast, the Govind Ji Temple provides a captivating experience. Its serene ambiance, coupled with its architectural splendor, makes it a must-visit destination in Vrindavan.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://www.google.com/maps?ll=27.502326,77.683687&z=14&t=m&hl=en-US&gl=US&mapclient=embed&cid=4911790846997250528"
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
                                        Explore the divine legacy of Vrindavan!
                                        <span style={{ color: 'green' }}>Reconnect with your faith!</span>
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

export default GovindJiTemple;
