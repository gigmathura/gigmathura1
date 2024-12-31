import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const GowardhanParvat = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Discover the spiritual and historical significance of Gowardhan Parvat, a sacred site in Braj, associated with Lord Krishna's divine pastimes." />
                <meta name="keywords" content="Gowardhan Parvat, Braj, Mathura, Krishna Leela, Parikrama, pilgrimage sites, Hindu mythology, Lord Krishna" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Gowardhan Parvat - A Divine Mountain</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Gowardhan Parvat</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Gowardhan Parvat"
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
                                    Gowardhan Parvat, also known as Govardhan Hill, is a prominent pilgrimage site in the Braj region of Uttar Pradesh, India.
                                    Associated with the divine pastimes of Lord Krishna, this sacred hill holds a special place in Hindu mythology and devotion.
                                    It is a must-visit for devotees seeking spiritual fulfillment and a deeper connection with Krishna Leela.
                                </p>

                                <Image
                                    src="https://shrimathuraji.com/wp-content/uploads/2024/05/Goverdhan-Parikrama-4.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Gowardhan Parvat"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Mythological Significance</h2>
                                <p>
                                    According to Hindu mythology, Gowardhan Parvat is famously linked to the tale of Lord Krishna lifting the hill to
                                    protect the people of Braj from the wrath of Lord Indra, the king of the heavens. This event is celebrated during
                                    the festival of Govardhan Puja, a day after Diwali, symbolizing Krishna&apos;s message of humility and devotion.
                                    The hill is also revered as a manifestation of Lord Krishna himself, making it a center of profound spiritual energy.
                                </p>

                                <Image
                                    src="https://www.inditales.com/wp-content/uploads/2019/04/govardhan-parvat.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Govardhan Puja"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Parikrama and Pilgrimage</h2>
                                <p>
                                    The 21-kilometer Parikrama (circumambulation) of Gowardhan Parvat is a sacred ritual undertaken by countless devotees
                                    each year. The route passes through several important stops, including Kusum Sarovar, Radha Kund, Shyam Kund, and
                                    Manasi Ganga. Pilgrims often perform this Parikrama barefoot, chanting Krishna&apos;s name and offering prayers.
                                    <br />
                                    #Tip: Start your Parikrama early morning to avoid the midday heat and carry sufficient water to stay hydrated.
                                </p>

                                <h2>Architectural Marvels</h2>
                                <p>
                                    While Gowardhan Parvat itself is a natural formation, its surroundings are adorned with several ancient temples and
                                    holy kunds (water bodies). Kusum Sarovar, a beautiful sandstone monument, stands out for its architectural elegance.
                                    The serene atmosphere and intricate carvings make it a photographer&apos;s paradise.
                                </p>
                                <Image
                                    src="https://shrimathuraji.com/wp-content/uploads/2024/04/giriraj-ji-photo-by-air-govardhan.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Kusum Sarovar"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Govardhan Puja:</strong> Celebrated with great fervor, Govardhan Puja marks the day Lord Krishna lifted Gowardhan
                                    Hill. Devotees create a small hill made of cow dung to symbolize Govardhan and offer a variety of sweets and savories.
                                </p>
                                <p>
                                    <strong>Radha Kund Snan:</strong> On Kartik Purnima, devotees take a holy dip in Radha Kund, believing it washes away sins
                                    and brings spiritual blessings.
                                </p>

                                <p>
                                    If you&apos;re planning to visit Mathura, Vrindavan, Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/mJiELkxTvirV6pfM6"
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
                                        Embrace the divine energy of Gowardhan Parvat!
                                        <span style={{ color: 'green' }}>Experience Spiritual Bliss!</span>
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

export default GowardhanParvat;
