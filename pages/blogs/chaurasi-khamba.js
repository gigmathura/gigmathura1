import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ChaurasiKhambaMandir = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Discover the Chaurasi Khamba Mandir in Gokul, Mathura, a marvel of architectural elegance and deep spiritual significance." />
                <meta name="keywords" content="Chaurasi Khamba Mandir,Nand Bhawan gokul, Gokul, Mathura temples, ancient Indian architecture, spiritual tourism, Krishna pilgrimage" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Chaurasi Khamba Mandir Gokul</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Chaurasi Khamba Mandir</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Chaurasi Khamba Mandir"
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
                                    The Chaurasi Khamba Mandir or the Nand Bhawan, situated in the tranquil town of Gokul, is an iconic spiritual and architectural site in Mathura.
                                    Named after its 84 intricately carved pillars, this ancient temple is a must-visit destination for devotees and history enthusiasts alike.
                                </p>

                                <Image
                                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH-6WB-K4MiveXQRrZA5vK2yWZbLus912wgZj9Udgz6uguiiDNwwBnpIHgK__2gbYhbk5gsLxXtlgIv9FIvNCDmb8CQlqaz1hS2m67oKOQIWxDNxnyHjsVCAOKaHq2-OPkUMr8tnUE_5iP/"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Chaurasi Khamba Mandir"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>
                                    The temple is steeped in legend and lore, believed to date back to the era of Lord Krishna.
                                    It is said that Gokul was the home of Lord Krishna during his early childhood, and the Chaurasi Khamba Mandir stands as a testament
                                    to the deep spiritual history of the region. The temple&apos;s pillars are symbolic, representing various elements of Hindu cosmology and divine narratives.
                                    Over centuries, the temple has been a focal point for devotees seeking peace and blessings.
                                </p>

                                <h2>Architectural Grandeur</h2>
                                <p>
                                    As its name suggests, the Chaurasi Khamba Mandir boasts 84 beautifully sculpted stone pillars, each adorned with intricate carvings
                                    depicting scenes from Hindu mythology. The symmetry and craftsmanship reflect the ingenuity of ancient Indian architects.
                                    The temple&apos;s sanctum sanctorum houses a divine idol, creating a serene ambiance for visitors.
                                    The murals and decorative motifs across the temple&apos;s interior further enhance its visual and spiritual appeal.
                                </p>

                                <Image
                                    src="https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/62263b316e45f8000953ee1d-m.jpeg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Intricate Pillars of Chaurasi Khamba Mandir"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Mystery of 84 Khamba Mandir </h2>
                                <p>
                                    Kaman is ruled by the number 84. There are 84 ponds, 84 temples and 84 hectares of land that is divided into 84 small pools of water.
                                    Located to the west of Kaman township in Bharatpur district is the Chaurasi Khamba temple (84 pillared temple). There is no idol worship, or for that matter, worship of any kind, performed at this site; yet, it is called a temple. Chaurasi Khamba is an ancient monument having 84 intricately carved pillars, but none has been able to count the exact number yet! Every time a curious visitor has attempted to count the pillars of the temple, the total number has either receded or exceeded the exact number. For this reason, Chaurashi Khamba is considered spooky.
                                    Legend also states that Lord Krishna had lived for a brief span in this monument during his childhood. Even the Pandava brothers had spent some part of the term of their exile in the forests before the Mahabharata war. Additionally, the locals believed that there is a pond close by, named Dharam Kund where the deity of Justice, Yama, had tested Yudhisthira’s wisdom by assuming the form of a Yaksha.
                                    Some men also believe that in his lifetime, King Vikramaditya, held his court at Chaurasi Khamba, though it is hard to tell whether it is just heresy or true.
                                    So, if you think you are good with numbers, there is a worthy reason for you to visit Chaurasi Khamba in Kaman.
                                </p>

                                <h2>Temple Timings</h2>
                                <p>
                                In Summers The temple opens daily from <strong>5:00 AM to 12:00 PM</strong> and again from <strong>2:00 PM to 09:00 PM</strong>
                                    <br />
                                    In Winters The temple opens daily from <strong>5:30 AM to 12:00 PM</strong> and again from <strong>2:00 PM to 08:30 PM</strong>

                                    <br />
                                    The best time to visit is early morning or evening to enjoy the tranquil surroundings and attend the aarti.
                                </p>

                                <Image
                                    src="https://ebnw.net/wp-content/uploads/2023/12/A17.png"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Chaurasi Khamba Mandir at Night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Chaurasi Khamba Mandir?</h2>
                                <p><strong>Nearest Bus Stop:</strong> The Gokul Bus Stand is just 2 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction is located around 12 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra&apos;s Kheria Airport is approximately 75 kilometers away. Delhi&apos;s Indira Gandhi International Airport is around 165 kilometers away.</p>

                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Nearby Attractions</h2>
                                <p>
                                    While in Gokul, visit other nearby attractions like the Raman Reti Ashram, Nand Bhavan, and the Yamuna River ghats to complete your spiritual journey.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://www.google.com/maps/place/Shri+Nand+Bhavan+84+khamma+Old+Gokul+Mahavan/data=!4m2!3m1!1s0x0:0x498cb9791f5309c1?sa=X&ved=1t:2428&ictx=111"
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

export default ChaurasiKhambaMandir;
