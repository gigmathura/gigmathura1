import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const Mathura = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore the best places to visit in Mathura and Vrindavan, including top tourist spots for families, couples, and unique experiences beyond temples. Plan your trip today!" />
                <meta name="keywords" content="Places to visit in Mathura, Places to visit in Mathura Vrindavan, Places to visit in Mathura in 1 day, Places to visit in Vrindavan, Top 5 tourist places in Mathura, Places to visit in Mathura with family, Places to visit in Mathura for couples, Places to visit in Mathura except temples" />
                <meta name="author" content="Places to visit in Mathura, Vrindavan" />
                <link rel="canonical" href="https://www.gigdarshan.com/blogs/places-to-visit-in-mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Places to Visit in Mathura</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Places You Must Visit in Mathura Vrindavan</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="user"
                                        width={100}
                                        height={100}
                                        loading="lazy" // Explicit lazy loading
                                    />
                                    <div className="d-block">
                                        <span className="d-block">by GIG</span>
                                        <span className="d-block text-muted">28th Dec. 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogSection}>
                                <p>
                                    Lord Krishna&apos;s birthplace, Mathura, is deeply significant both historically and spiritually. Located in Uttar Pradesh, this quaint city draws both pilgrims and tourists. There are a ton of things to do in Mathura and nearby Vrindavan, whether you&apos;re planning a quick getaway or a longer stay. The best places to visit in Mathura and Vrindavan will be discussed here, along with family-friendly locations, romantic getaways, and unique attractions beyond the temples.
                                </p>

                                <Image
                                    src="https://www.blog.traveltoindia.org/wp-content/uploads/2024/06/explore-mathura-vrindavan-and-barsana.webp"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Shri Bankey Bihari Temple"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Top 5 Tourist Places in Mathura</h2>
                                <ol>
                                    <li>Shri Krishna Janmabhoomi Temple</li>
                                    <li>Dwarkadhish Temple</li>
                                    <li>Vishram Ghat</li>
                                    <li>Kusum Sarovar</li>
                                    <li>Govardhan Hill</li>
                                </ol>

                                <h2>Places to Visit in Mathura in 1 Day</h2>
                                <p>If you have limited time, u can prefer this schedule:</p>
                                <ul>
                                    <li>Start your day at Shri Krishna Janmabhoomi Temple</li>
                                    <li>Visit Dwarkadhish Temple and Vishram Ghat.</li>
                                    <li>End your day with an evening aarti at the Yamuna River.</li>
                                </ul>
                                <Image
                                    src="https://static.toiimg.com/photo/msid-86454434,width-96,height-65.cms"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="kusum sarover"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                                <h2>Places to Visit in Mathura for Couples</h2>
                                <p>For couples seeking a romantic and spiritual retreat:</p>
                                <ul>
                                    <li>Kusum Sarovar: Known for its picturesque setting and serene vibe.</li>
                                    <li>Prem Mandir: Stroll through the illuminated gardens and enjoy its romantic ambiance.</li>

                                </ul>

                                <h2>Places to Visit in Mathura Except Temples</h2>
                                <p>While Mathura is known for its temples, there&apos;s more to explore:</p>
                                <ul>
                                    <li>Government Museum, Mathura: Dive into the city&apos;s rich history through ancient artifacts.</li>
                                    <li>Kans Qila: This fort offers a glimpse into Mathura&apos;s Mughal past.</li>
                                    <li>Potara Kund: Believed to be the spot where Lord Krishna&apos;s clothes were washed, this kund is a hidden gem.</li>

                                </ul>
                                <h2>Places to Visit in Mathura and Vrindavan in One Day</h2>
                                <p>If you&apos;re short on time, plan a combined trip to Mathura and Vrindavan</p>
                                <ul>
                                    <li>Morning: Begin at Shri Krishna Janmabhoomi Temple and Dwarkadhish Temple.</li>
                                    <li>Afternoon: Head to Vrindavan&apos;s Banke Bihari Temple and Prem Mandir.</li>
                                    <li>Evening: Conclude your journey with the Yamuna River aarti.</li>

                                </ul>
                                <Image
                                    src="https://static.wanderon.in/wp-content/uploads/2024/02/mathura-holi-1.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Holi in Mthura"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <div>
                                    <h2>Festivals and Celebrations in Mathura</h2>
                                    <p>
                                        Mathura comes alive with vibrant festivals and celebrations throughout the year, drawing visitors from around the globe.
                                    </p>
                                    <h3>1. Janmashtami</h3>
                                    <p>
                                        The most significant festival in Mathura, Janmashtami celebrates the birth of Lord Krishna with grandeur. Temples are decorated, and events like Raslila performances and midnight prayers attract thousands of devotees.
                                    </p>
                                    <h3>2. Holi</h3>
                                    <p>
                                        Holi in Mathura and Vrindavan is a spectacle of colors and joy. The Lathmar Holi in Barsana and Vrindavan&apos;s Phoolon ki Holi (Holi with flowers) are unique experiences that shouldn&apos;t be missed.
                                    </p>
                                    <h3>3. Radhashtami</h3>
                                    <p>
                                        This festival commemorates the birth of Radha, Lord Krishna&apos;s divine consort. It&apos;s celebrated with great devotion and cultural performances.
                                    </p>
                                    <h3>4. Diwali</h3>
                                    <p>
                                        Known as the Festival of Lights, Diwali in Mathura sees temples and homes adorned with diyas, candles, and rangoli, creating a magical atmosphere.
                                    </p>
                                    <h3>5. Guru Purnima</h3>
                                    <p>
                                        A day to honor spiritual teachers, Guru Purnima in Mathura involves special prayers, offerings, and satsangs in temples and ashrams.
                                    </p>
                                </div>


                                <h2>How to Reach Mathura?</h2>
                                <p>
                                    <strong>By Road:</strong> Mathura is well-connected by road with regular buses and private cabs.
                                    <br />
                                    <strong>By Train:</strong> Mathura Junction is a major railway station with trains from all parts of India.
                                    <br />
                                    <strong>By Air:</strong> The nearest airport is Agra Airport, approximately 50 kilometers away.
                                </p>

                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>


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

export default Mathura;
