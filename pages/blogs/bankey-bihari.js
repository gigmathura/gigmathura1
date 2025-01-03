import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ShriBankeyBihariVrindavan = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Discover Shri Bankey Bihari Temple in Vrindavan, a spiritual hub for Lord Krishna devotees. Explore its history, architecture, and unique rituals." />
                <meta name="keywords" content="Vrindavan, Bankey Bihari Temple, Lord Krishna, Vrindavan temples, Hindu pilgrimage, Banke Bihari Darshan" />
                <meta name="author" content="GIG Vrindavan" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Shri Bankey Bihari Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Shri Bankey Bihari Temple</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Shri Bankey Bihari Temple"
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
                                    Nestled in the heart of Vrindavan, the Shri Bankey Bihari Temple is one of the most revered shrines dedicated to Lord Krishna.
                                    Known for its unique rituals and vibrant ambiance, it attracts millions of devotees from across the world.

                                    Bankey Bihari Mandir is a Hindu temple dedicated to Lord Krishna, in the holy city of Vrindavan in the Mathura district. Bankey Bihari was originally worshiped at Nidhivana. Bankey means “bent in three places” and bihari means “supreme enjoyer.” The image of Lord Krishna stands in the Tribhanga posture. Haridas Swami originally worshipped this devotional image under the name of Kunj-bihari (“Enjoyer of Lakes”).

                                    &apos;Bankey&apos; means &apos;bent&apos;, and &apos;Bihari&apos; or &apos;Vihari&apos; means &apos;enjoyer&apos;. This is how Krishna, who is bent in three places, got the name “Bankey Bihari”.
                                </p>

                                <Image
                                    src="https://brijkerasiya.org/wp-content/uploads/2024/07/banke-bihari-temple.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Shri Bankey Bihari Temple"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Story of Bankey Bihari Ji</h2>
                                <p>
                                    The story of Banke Bihari Ji starts with Swami Haridas, a respected holy man born in 1478 A.D. in Haridaspur close to Aligarh, Uttar Pradesh. People think Swami Haridas was Lalita Sakhi, a good friend of Lord Krishna, in human form. As a kid, he loved to meditate and focus on spiritual things staying away from worldly stuff even after he got married.
                                    Swami Haridas ended up living in Vrindavan, which was a thick forest back then. He picked a quiet place now called Nidhivan, to meditate and write songs praising Lord Krishna. His strong faith and beautiful music made many people want to learn from him.
                                    Swami Haridas&apos;s students felt curious about his godly experiences. They asked if they could join him at his private meditation place in Nidhivan. As they walked in, a dazzling light blinded them. Swami Haridas noticed they were struggling. He asked the Lord to show up in a milder form. The Lord listened. Krishna and Radharani then appeared in their godly shapes. Their beauty captivated everyone there.
                                    The divine couple&apos;s combined beauty had such an overwhelming effect that Swami Haridas asked them to join into one form. He thought mortal eyes couldn&apos;t handle their brilliance. The couple granted his wish and changed into the single black idol we now know as Banke Bihari Ji.
                                </p>

                                <h2>Architectural Beauty</h2>
                                <p>
                                    The Bankey Bihari Temple showcases a blend of Rajasthani and Mughal architectural styles. The intricate carvings, colorful paintings,
                                    and ornate arches are a visual treat. The sanctum houses a mesmerizing idol of Lord Krishna in his Bankey Bihari form, a charming blend
                                    of mischief and divinity.
                                </p>
                                <h2>Shri Bankey Bihariji Darshan & Aarti Timings</h2>
                                <p>
                                    In Summer the temple is open daily from <strong>7:45 AM to 12:00 PM</strong> and <strong>5:30 PM to 9:30 PM</strong>.
                                    <br />
                                    Shringar Aarti at 7:45 am
                                    <br />
                                    Raj Bhog Aarti at 11:55 am
                                    <br />
                                    Shayan Aarti at 9:30 pm
                                    <br />
                                    <br />
                                    In Winter the temple is open daily from <strong>8:45 AM to 12:55 PM</strong> and <strong>4:30 PM to 8:30 PM</strong>.
                                    <br />
                                    Shringar Aarti at 8:55 am
                                    <br />
                                    Raj Bhog Aarti at 12:55 am
                                    <br />
                                    Shayan Aarti at 8:30 pm
                                    <br />
                                    Early mornings and evenings are the best times for a peaceful darshan.
                                </p>

                                <h2>Unique Rituals</h2>
                                <p>
                                    The temple follows a distinct style of worship. The deity is kept behind a curtain, which is drawn and closed every few minutes to
                                    protect devotees from the intense spiritual energy emanating from the idol. This ritual symbolizes the playful nature of Lord Krishna.
                                </p>

                                <Image
                                    src="https://thetempleguru.com/wp-content/uploads/2023/11/banke-bihari-temple-vrindavan-11.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Bankey Bihari Rituals"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    The temple comes alive during festivals like Janmashtami, Holi, and Radhashtami. During these occasions, the temple is decorated with
                                    flowers and lights, and special bhajans and kirtans are performed. Holi at Bankey Bihari is particularly famous for its colorful
                                    and joyous celebrations.
                                </p>
                                <Image
                                    src="https://www.rajasthantourplanner.com/blog/wp-content/uploads/2023/12/BankeyBihari-Temple.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Bankey Bihari Rituals"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                                <h2>How to Reach Bankey Bihari Temple?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand, just 2 kilometers away.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction, approximately 12 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport, around 75 kilometers from Vrindavan.</p>

                                <p>
                                    If you&apos;re planning to visit Mathura, you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/sjBFiBKti8TK8SBy9"
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

export default ShriBankeyBihariVrindavan;
