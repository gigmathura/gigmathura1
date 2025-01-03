import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const RamanRetiMathura = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Raman Reti in Mathura, a sacred site associated with Lord Krishna&apos;s divine pastimes. Discover its tranquil ambiance and spiritual significance for devotees worldwide." />
                <meta name="keywords" content="Mathura, Raman Reti, Lord Krishna, spiritual site, Mathura tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Raman Reti Mathura</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Raman Reti Mathura</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Raman Reti Mathura"
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
                                    Located in Gokul, near Mathura, Raman Reti is a sacred site where Lord Krishna is believed to have played with his brother Balram and friends during his childhood. The soft, sandy expanse of Raman Reti holds great spiritual significance for devotees who seek to connect with the divine playfulness of Lord Krishna.
                                </p>

                                <Image
                                    src="https://faujitoursandtravels.com/wp-content/uploads/2024/09/2022-11-15-1.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Raman Reti"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Spiritual Significance</h2>
                                <p>
                                    Raman Reti is a serene destination for meditation and spiritual reflection. Devotees believe walking barefoot on the soft sands of Raman Reti purifies the soul and brings one closer to divinity. The site is adorned with several ashrams and temples, making it a peaceful retreat for spiritual seekers.
                                    Today, Raman Reti is a calm and quiet area with a deer sanctuary, a few beautiful temples, and spaces for visitors, saints, and pilgrims to relax. When you visit, you can walk around and think about the fun times Krishna and his friends had here.

                                    Next to Raman Reti is the Karshni Ashram, a well-known spiritual place that houses the ancient Raman Bihariji Temple, dedicated to Lord Krishna. This temple was founded in the 18th century by Saint Gyandasji, who saw a vision of Lord Krishna after performing severe penances here. Inspired by this vision, he Created the Deities in the exact form of Krishna as he appeared to him

                                    Raman Reti is a perfect place for anyone looking for peace and quiet. Its calmness makes it popular with tourists who want to enjoy a peaceful and relaxing time.
                                </p>

                                <h2>Ashrams and Temples</h2>
                                <p>
                                    The area around Raman Reti is home to many notable ashrams and temples:
                                    <br />
                                    <strong>Nand Baba Temple:</strong> Dedicated to Nand Baba, Krishna&apos;s foster father, this temple is a prominent attraction.
                                    <br />
                                    <strong>Santanu Ashram:</strong> A hub for spiritual practices and meditation.
                                    <br />
                                    <strong>Jatipura Temple:</strong> Known for its tranquil ambiance and significance in Krishna&apos;s lore.
                                </p>
                                <Image
                                    src="https://faujitoursandtravels.com/wp-content/uploads/2024/09/2022-01-23-768x528.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Ashrams and Temples at Raman Reti"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    Raman Reti is a hub for festive celebrations, particularly during Janmashtami and Holi. The serene site comes alive with devotional songs, rituals, and grand festivities that attract thousands of devotees.
                                    <br />
                                    <strong>Janmashtami:</strong> The birthday of Lord Krishna is celebrated with grandeur, with midnight rituals and devotional activities.
                                    <br />
                                    <strong>Holi:</strong> The festival of colors is celebrated with fervor, reflecting the playful nature of Lord Krishna.
                                </p>
                                <h2>Timings</h2>
                                <p>
                                    In Summers The temple opens daily from <strong>5:00 AM to 12:00 PM</strong> and again from <strong>4:00 PM to 09:00 PM</strong>
                                    <br />
                                    In Winters The temple opens daily from <strong>5:30 AM to 12:00 PM</strong> and again from <strong>4:00 PM to 08:30 PM</strong>

                                    <br />
                                    Raman Reti is best visited during the early morning or late evening when the serene ambiance is most pronounced. The cooler months from October to March are ideal for a comfortable experience.
                                </p>

                                <Image
                                    src="https://mathurahub.com/wp-content/uploads/2022/03/Raman-Reti-600.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Serene Raman Reti"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Raman Reti?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Mathura Bus Stand is around 15 kilometers away.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction is approximately 14 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> The nearest airport is in Agra, about 65 kilometers away. Delhi&apos;s Indira Gandhi International Airport is around 150 kilometers away.</p>
                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Why Visit Raman Reti?</h2>
                                <p>
                                    Whether for spiritual growth, peaceful reflection, or a glimpse into Krishna&apos;s playful pastimes, Raman Reti offers a unique blend of divinity and tranquility. Visit this sacred site to immerse yourself in the timeless tales of Krishna and rejuvenate your soul.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://www.google.com/maps/place/Shri+Raman+Bihariji+Mandir/@27.427686,77.7282041,17z/data=!3m1!4b1!4m6!3m5!1s0x39737776098b93a5:0xe08c877460c5e690!8m2!3d27.427686!4d77.7282041!16s%2Fg%2F11bxg0ghjb?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
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

export default RamanRetiMathura;
