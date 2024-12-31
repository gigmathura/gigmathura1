import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const KusumSarovar = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore the serene Kusum Sarovar in Govardhan. Learn about its history, spiritual significance, and mesmerizing architecture." />
                <meta name="keywords" content="Kusum Sarovar, Govardhan, Mathura temples, Hindu pilgrimage, Radha Krishna, Mathura tourism" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Kusum Sarovar Govardhan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Kusum Sarovar</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Kusum Sarovar"
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
                                    Situated on the sacred Govardhan Hill in Mathura, Kusum Sarovar is a beautiful and serene reservoir steeped in mythological and historical significance. This enchanting site is believed to be a place where Radha and Krishna spent divine moments together amidst the fragrant groves of flowers.
                                </p>

                                <Image
                                    src="https://pbs.twimg.com/media/FCY-ovhUUAMDGup.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Kusum Sarovar"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>
                                    Kusum Sarovar has its roots in the tales of Radha and Krishna. The name &apos;Kusum&apos; signifies flowers, and it is said that this site was adorned with beautiful groves where Radha would collect flowers for Krishna. The reservoir also holds historical importance, with the structures around it built during the reign of the Jat rulers, particularly Maharaja Suraj Mal.
                                </p>
                                <p>
                                    The Sarovar is also associated with the great saint Narottam Das, who meditated here, seeking divine blessings. This tranquil spot continues to inspire devotion and peace among visitors.
                                </p>

                                <h2>Architectural Beauty</h2>
                                <p>
                                    Kusum Sarovar is not just a spiritual retreat but also an architectural marvel. The ghats (steps leading to the water) are intricately designed, and the surrounding temples reflect the grandeur of Mughal and Rajput architecture. The main structure is a cenotaph dedicated to Maharaja Suraj Mal and his queens, featuring exquisite carvings and murals depicting scenes from Krishna&apos;s life.
                                </p>
                                <Image
                                    src="https://kevinstandagephotography.wordpress.com/wp-content/uploads/2019/05/ksp_6561.jpg?w=1024"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Kusum Sarovar Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Radhashtami:</strong> Kusum Sarovar becomes a hub of celebrations during Radhashtami, commemorating the birth of Radha. Devotees gather to offer flowers, sing devotional songs, and participate in rituals.
                                </p>
                                <p>
                                    <strong>Sharad Purnima:</strong> This full moon night is considered highly auspicious for visiting Kusum Sarovar. The area is beautifully illuminated, creating a divine atmosphere.
                                </p>

                                <h2>Visiting Hours</h2>
                                <p>
                                    You can visit any time , but it recommended to visit between <strong>5:00 AM to 9:00 PM</strong> daily. The serene mornings and evenings are the best times to visit, allowing visitors to soak in the tranquil beauty of the reservoir and its surroundings.
                                </p>

                                <Image
                                    src="https://www.brijwale.com/wp-content/uploads/2021/01/DSC_0114.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Kusum Sarovar at Sunset"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Kusum Sarovar?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Govardhan Bus Stand is about 3 kilometers from Kusum Sarovar.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction, located 22 kilometers away, provides convenient access.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport is the closest, approximately 70 kilometers away. Delhi&apos;s Indira Gandhi International Airport is about 150 kilometers away.</p>

                                <p>
                                    If you&apos;re planning to visit Mathura, Vrindavan, Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Why Visit Kusum Sarovar?</h2>
                                <p>
                                    Kusum Sarovar offers a perfect blend of spiritual enrichment and natural beauty. Whether you&apos;re a devotee, a history enthusiast, or a lover of architecture, this serene spot will leave you spellbound. Its connection to Radha and Krishna&apos;s pastimes makes it a must-visit for anyone exploring the holy land of Braj.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/a5Y3hFbWKGh5tcnZ9"
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
                                        Experience the divine serenity of Govardhan!
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

export default KusumSarovar;
