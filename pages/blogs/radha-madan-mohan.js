import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const MadanMohanTemple = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore the historic and spiritually significant Madan Mohan Temple in Vrindavan. Learn about its history, architecture, and cultural importance." />
                <meta name="keywords" content="Vrindavan, Madan Mohan Temple, temples in Vrindavan, Hindu pilgrimage, Madan Mohan history" />
                <meta name="author" content="GIG Vrindavan" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Radha Madan Mohan Temple Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Radha Madan Mohan Temple</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Madan Mohan Temple"
                                        width={100}
                                        height={100}
                                        loading="lazy" // Explicit lazy loading
                                    />
                                    <div className="d-block">
                                        <span className="d-block">by GIG Vrindavan</span>
                                        <span className="d-block text-muted">28th Dec. 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogSection}>
                                <p>
                                    The Radha Madan Mohan Temple in Vrindavan is one of the oldest and most revered temples in the region, dedicated to Lord Krishna.
                                    Nestled atop a hill near the Yamuna River, it is a symbol of devotion, architectural beauty, and spiritual significance.
                                    The temple attracts devotees and tourists alike, offering a glimpse into the cultural and religious heritage of Vrindavan.
                                </p>

                                <Image
                                    src="https://vrindavantemples.com/wp-content/uploads/2024/05/Shri-Radha-Madan-Mohan-ji-Temple-Vrindavan-Architectural-Marvel-1024x683.png"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Madan Mohan Temple"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>History of Shri Radha Madan Mohan Temple</h2>
                                <p>
                                    According to popular folklore, Shri Radha Madan Mohan temple in Vrindavan is 5000 years old. It was first believed to be constructed by that the great-grandson of Krishna - Vajranabh. However, with the passage of time, deities were lost. Later, the deity of Madan Mohan was discovered at the base of an old banyan tree by Advaita Acharya, when he visited Vrindavan. He entrusted the worship of Madana Mohan to his disciple, Purusottama Chaube, who then gave the deity to Sanatana Goswami.

                                    According to historical sources, it was in 1580 AD that this temple was rebuilt under the guidance of Sri Sanatana Goswami by a Multan trader Kapur Ram Das. As the temple was invaded by Mughal emperor Aurangzeb in 1670 AD, the original idol of Madan Mohan was secretly shifted to Jaipur by King Jai Singh overnight before the attack of Aurangzeb on Vrindavan and Mathura temples. Later, the deities are shifted to Karauli by King Gopal Singh. The original deities of Shri Radha Madan Mohan temple are presently installed in Madan Mohan temple of Karauli, Rajasthan.


                                    Original murtis of Radha(right), Krishna (at center), Lalita gopi(left) in Shri Radha Madan Mohan Temple, Karauli.
                                    The original deity of Madan Mohan is said to exactly resemble Krishna from the waist down. In 1748 AD, a replica of Madan Mohan was established in the Madan Mohan temple, Vrindavan. In 1819 AD, Nanda Kumar Basu, a zamindar from Baharu rebuilt the temple at the foot of the hill near Yamuna river. Presently, Shri Radha Madan mohan temple of Vrindavan houses the replica of original deities which are installed in the Madan Mohan temple, Karauli.
                                </p>

                                <h2>Architectural Grandeur</h2>
                                <p>
                                    The Madan Mohan Temple is an architectural marvel, showcasing traditional North Indian temple design.
                                    The temple&apos;s towering spire, intricate carvings, and red sandstone construction make it a sight to behold.
                                    Unlike modern temples, the simplicity of its design exudes an old-world charm that resonates with devotees.

                                    The temple complex includes a smaller shrine dedicated to Radha Rani and other deities, surrounded by lush greenery
                                    that enhances its tranquil atmosphere. The serene Yamuna River flowing nearby adds to the divine ambiance of the temple.
                                </p>
                                <Image
                                    src="https://thetempleguru.com/wp-content/uploads/2024/03/Radha-Madan-Mohan-Temple-Vrindavan-11.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Janmashtami:</strong> The temple comes alive during Janmashtami, the birth anniversary of Lord Krishna. Devotees gather
                                    in large numbers to participate in kirtans, bhajans, and special rituals dedicated to Lord Madan Mohan.
                                </p>
                                <p>
                                    <strong>Radhashtami:</strong> Another major festival celebrated with great fervor is Radhashtami, marking the appearance
                                    day of Radha Rani. The temple is beautifully decorated, and special offerings are made to the deities.
                                </p>
                                <p>
                                    <strong>Kartik Month:</strong> During the sacred month of Kartik, the temple hosts special evening aartis and lamp-lighting
                                    ceremonies that create a mesmerizing spiritual atmosphere.
                                </p>

                                <h2>Visiting Information</h2>
                                <p>
                                    The temple is open daily from <strong>7:00 AM to 12:00 PM</strong> and <strong>4:00 PM to 9:00 PM</strong>.
                                    Early mornings and evenings are the best times to visit for a peaceful darshan and to witness the evening aarti.
                                </p>

                                <Image
                                    src="https://www.trawell.in/admin/images/upload/941139768Vrindavan_Madan_Mohan_Temple_Main.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Madan Mohan Temple at Dusk"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Madan Mohan Temple?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand is just 2 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction is located around 12 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra&apos;s Kheria Airport is approximately 75 kilometers away, while Delhi&apos;s Indira Gandhi International Airport is around 150 kilometers away.</p>
                                <p>
                                    If you&apos;re planning to visit Mathura, Vrindavan, Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Cuisines to Try Near Madan Mohan Temple</h2>
                                <p>
                                    Vrindavan offers a variety of delicious vegetarian dishes. Do try the famous Malai Mishri, Rabri, Peda, and traditional
                                    North Indian thalis. Popular eateries near the temple include Brijwasi Mithai Wala, Govinda&apos;s, and Ammaji&apos;s Restaurant.
                                </p>

                                <h2>Why Visit Madan Mohan Temple?</h2>
                                <p>
                                    The Madan Mohan Temple is a place where history, spirituality, and culture converge. Its serene ambiance, coupled with
                                    its historical importance, makes it a must-visit destination for devotees and history enthusiasts alike.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/Nhs5w9zw65z42bum9"
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

export default MadanMohanTemple;
