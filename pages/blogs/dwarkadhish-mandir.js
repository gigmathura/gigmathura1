import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ShriDwarkadhishTemple = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Shri Dwarkadhish Temple in Mathura, a monumental center of devotion to Lord Krishna. Discover its history, art, and spiritual significance." />
                <meta name="keywords" content="Mathura, Dwarkadhish Temple, Lord Krishna temple, Mathura tourism, Hindu pilgrimage, Dwarka Mathura" />
                <meta name="author" content="GIG Mathura" />
                <link rel="canonical" href="https://www.gigdarshan.com/blogs/dwarkadhish-mandir" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Shri Dwarkadhish Temple Mathura</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Shri Dwarkadhish Temple</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Shri Dwarkadhish Temple"
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
                                    Nestled in the heart of Mathura, the Shri Dwarkadhish Temple stands as a magnificent tribute to Lord Krishna in his
                                    form as the King of Dwarka. Renowned for its intricate architecture and vibrant festivals, this temple is one of the
                                    most iconic and spiritually uplifting sites in Mathura.
                                </p>

                                <Image
                                    src="https://apnayatra.com/wp-content/uploads/2023/06/Dwarkadhish-Temple-Mathura6.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Shri Dwarkadhish Temple"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>
                                    Established in 1814 by Seth Gokuldas Parikh, a treasurer of the Gwalior State, the temple is an embodiment of devotion
                                    and artistry. Dedicated to Lord Krishna as Dwarkadhish (King of Dwarka), it represents the amalgamation of Gujarat
                                    and Braj traditions. The temple continues to be a spiritual haven for millions of devotees from around the world.
                                    An array of beautiful ceiling paintings showcasing the various aspects of the Lord&apos;s life and the beautiful Rajasthani architectural designs and carving makes the complex look even more magnanimous. The Dwarkadhish temple is currently managed by the followers of Vaishnava sect (started by Mahaprabhu Vallabhacharya) and is a centre for lots of interesting activities all year round especially during the Shravan months when the Lord&apos;s Idol is placed inside a Hindola a (type of a swing set). Other important festivals celebrated are Holi, Diwali and Janmashtami.
                                </p>

                                <h2>Architectural Grandeur</h2>
                                <p>
                                Built by a staunch devotee of Lord Krishna, Seth Gokul Das Parikh in 1814, Dwarkadhish temple is famous for its architecture and paintings. The temple complex has quite a large premise. The main building is magnificently carved in Rajasthani style entrance with a few steep steps leading to the main courtyard. In the centre of the yard are three rows of richly carved pillars supporting a beautiful painted ceiling. The paintings depict the life story of Lord Krishna.
                                    The Shri Dwarkadhish Temple is a stunning example of Rajasthani architectural brilliance. The temple features a
                                    magnificent gateway and intricately carved pillars, which lead to the sanctum housing the exquisite idol of Lord Krishna.
                                    Painted ceilings depicting scenes from Krishna&apos;s life add to the temple&apos;s allure, making it a masterpiece of devotional art.
                                </p>

                                <Image
                                    src="https://vrindavandarshan.in/wp-content/uploads/2024/01/2022-09-02.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Janmashtami:</strong> Like most temples in Mathura, Shri Dwarkadhish Temple sees its grandest celebrations
                                    during Janmashtami. The temple is adorned with lights, flowers, and colorful decorations. Devotees throng to witness
                                    the midnight birth rituals of Lord Krishna, accompanied by melodious bhajans and kirtans.
                                </p>
                                <p>
                                    <strong>Jhulan Yatra:</strong> A unique festival celebrated in Shravan (monsoon), during which the idol of Lord Krishna
                                    is placed on a beautifully decorated swing. Devotees take turns to swing the idol amidst chants and devotional songs.
                                </p>

                                <h2>Darshan & Aarti Timings</h2>
                                <p>
                                    The temple is open daily: <br />
                                    <strong>Summer Timings:</strong> 6:30 AM to 10:30 PM and 4:00 PM to 7:00 PM. <br />
                                    <strong>Winter Timings:</strong> 6:30 AM to 10:30 PM and 3:30 PM to 6:00 PM. <br />
                                    Summer Aarti Timings :
                                    <br />
                                     Mangla: 6:30 AM - 7:00 AM
                                    <br />
                                    Shringar: 7:40 AM - 7:55 AM
                                    <br />
                                    Gwal: 8:25 AM - 8:45 AM
                                    <br />
                                    Rajbhog: 10:00 AM - 10:30 AM
                                    <br />
                                    Utthanpan: 4:00 PM - 4:20 PM
                                    <br />
                                    Bhog: 4:45 PM - 5:05 PM
                                    <br />
                                    Aarti: 5:20 PM - 5:40 PM
                                    <br />
                                    Sayan: 6:30 PM - 7:00 PM
                                    <br />
                                    <br />
                                    
                                    Winter Aarti Timings :
                                    <br />
                                     Mangla: 6:30 AM - 7:00 AM
                                     <br />
                                    Shringar: 7:40 AM - 7:55 AM
                                    <br />
                                    Gwal: 8:25 AM - 8:45 AM
                                    <br />
                                    Rajbhog: 10:00 AM - 10:30 AM
                                    <br />
                                    Utthanpan: 3:30 PM - 3:50 PM
                                    <br />
                                    Bhog: 4:20 PM - 4:40 PM
                                    <br />
                                    Aarti: 6:00 PM
                                </p>

                                <h2>How to Reach Shri Dwarkadhish Temple?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Mathura Bus Stand is about 2 kilometers away.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction is located approximately 1.8 kilometers from the temple.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport is about 60 kilometers away, while Delhi&apos;s Indira Gandhi International Airport is around 160 kilometers.</p>
                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>
                                <h2>Cuisines to Try Near the Temple</h2>
                                <p>
                                    Don&apos;t miss the local specialties like Mathura Pede, Jalebi, and Kachori, along with North Indian delicacies. Nearby
                                    eateries such as Brijwasi Mithaiwala and Zaika offer delicious food, ensuring a wholesome culinary experience.
                                </p>

                                <h2>Why Visit Shri Dwarkadhish Temple?</h2>
                                <p>
                                    A visit to Shri Dwarkadhish Temple is not just a pilgrimage but an experience of the rich heritage and deep spiritual
                                    significance of Mathura. From its divine ambiance to its cultural grandeur, this temple offers an unparalleled
                                    connection to Lord Krishna&apos;s eternal teachings and glory.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://www.google.com/maps/place/ShriDwarkadhish+Temple,+Mathura/data=!4m2!3m1!1s0x0:0xbf31462debe58532?sa=X&ved=1t:2428&ictx=111"
                                        className="text-center w-100"
                                    >
                                        View On Map
                                    </Link>
                                </div>
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

            <Footer />
        </>
    );
};

export default ShriDwarkadhishTemple;
