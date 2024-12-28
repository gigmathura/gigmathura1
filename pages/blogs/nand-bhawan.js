import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const NandBhawanMandir = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Nand Bhawan Mandir in Gokul, Mathura, the historical residence of Nanda Baba and the divine childhood abode of Lord Krishna." />
                <meta name="keywords" content="Mathura, Nand Bhawan Mandir, Krishna childhood, temples in Gokul, Nanda Baba, Mathura tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Nand Bhawan Nandgaon</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Nand Bhawan Mandir, Nandgaon</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Nand Bhawan Mandir"
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
                                Nand Bhavan was the residence of Shri Krishna’s foster father Nand Maharaj in Nandgaon. Located at 30 km from Mathura, Nandgaon is located to the south adjacent to the Nandiswar hill. Nand Bhawan is nestled on a mountain peak verdant with green foliage all around. The rolling mountains at the backdrop make this place more spectacular. 
                                </p>

                                <Image
                                    src="https://www.brijwale.com/wp-content/uploads/2021/01/DSC_0143.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Nand Bhawan Mandir"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>
                                Visiting Nand Bhavan in Braj is like revisiting the infancy of Lord Krishna. The opulence of Nand Bhawan can be judged by its sprawling vast complex. The premises are huge and few ascending stairs lead to its entrance. Nand Bhawan is wealthy in its manifestation. The wide open spaces around the palace bring the yester-world real to the eyes. There are fascinating rooms exclusively allotted to everyone including father Nand baba, mother Yashoda, mother Rohini, Shri Krishna, Baldev, Shri Radha and their allies. The residence is extensive as it had a kitchen, dining hall, restrooms, storerooms etc. The mythical place is wrapped up with stories from the spiritually significant era.

 
Besides splendid and spacious rooms, pilgrims here are allured by the red sandstone temple of Nand Maharaja. This magnificent 19th-century temple is the major attraction for pilgrims. The ceilings of the temple are flooded with beautiful paintings and the walls are decorated with the scenes from the spiritually significant era. The murals and paintings seem so real that they bring the episodic scenes back to life that were once played in this palace for real. The temple has the idols of the deities Nand baba, mother Yashoda, Shri Krishna, brother Balarama, beloved Shri Radha and other family members. The enshrined deities are worshipped by the locals daily with faith.
                                </p>

                                <h2>Architectural Beauty</h2>
                                <p>
                                    The temple&apos;s architecture reflects the charm of a traditional Braj home. With its intricate carvings, vibrant frescoes,
                                    and peaceful courtyards, Nand Bhawan radiates a divine aura. The temple&apos;s interiors are adorned with colorful murals
                                    depicting scenes from Krishna&apos;s childhood.
                                    <br />
                                    The serene ambiance of the temple, coupled with its simplicity, offers visitors a glimpse into the life of the Braj
                                    villagers who shared Krishna&apos;s joyous early years.
                                </p>

                                <Image
                                    src="https://www.brijwale.com/wp-content/uploads/2021/01/DSC_0156-1.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Courtyard"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Krishna Janmashtami:</strong> The temple witnesses grand celebrations during Janmashtami, with devotees gathering
                                    to celebrate the birth of Lord Krishna. The atmosphere is filled with devotion as kirtans, bhajans, and cultural
                                    performances take center stage.
                                    <br />
                                    The highlight of the festivities is the reenactment of Krishna&apos;s childhood leelas, captivating visitors of all ages.
                                </p>
                                <p>
                                    <strong>Govardhan Puja:</strong> Another significant celebration at Nand Bhawan is Govardhan Puja, which honors Krishna&apos;s
                                    lifting of the Govardhan Hill. Devotees create an elaborate replica of the hill using food items and offer prayers
                                    and bhog to Lord Krishna.
                                </p>

                                <h2>Timings and Aarti</h2>
                                <p>
                                    In Summer the temple is open daily from <strong>5:00 AM to 2:00 PM</strong> and <strong>4:00 PM to 9:00 PM</strong>.
                                    In Winter the temple is open daily from <strong>6:00 AM to 2:00 PM</strong> and <strong>4:00 PM to 8:30 PM</strong>.
                                    <br />
                                    In Summer, Mangla Aarti at 5:00 am
                                    <br />
                                    In Winter, Mangla Aarti at 6:00 am
                                    <br />
                                    Early mornings and evenings are the best times for a peaceful darshan.
                                </p>

                                <Image
                                    src="https://www.brijwale.com/wp-content/uploads/2021/01/DSC_0151-1.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Nand Bhawan at Night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Nand Bhawan Mandir?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Gokul Bus Stand is just 2 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction is located around 12 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> The nearest airport is in Agra, approximately 70 kilometers away. Delhi&apos;s Indira Gandhi International Airport is around 160 kilometers away.</p>
                                <p>
                                    If you&apos;re planning to visit Mathura, Gokul, Vrindavan you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<a href='/'>Click Here to know more</a>
                                </p>

                                <h2>Nearby Attractions and Cuisines</h2>
                                <p>
                                    While in Gokul, visit other sacred sites like Raman Reti and Brahmand Ghat. Don&apos;t miss savoring the local delicacies,
                                    including Mathura Pedas, kachoris, and lassi, available at nearby eateries.
                                </p>

                                <div className="text-center w-100">
                                    <a
                                        href="https://www.google.com/maps?ll=27.679047,77.378755&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=Shri+Nandbaba+Temple,+Nandgaon"
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
                                        Experience the divine charm of Mathura Vrindavan Darshan! 
                                        <span style={{ color: 'green' }}> Embrace the Spiritual Essence!</span>
                                        <span style={{ color: 'red' }}>
                                            <br />
                                            BEGIN YOUR JOURNEY NOW!
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

export default NandBhawanMandir;
