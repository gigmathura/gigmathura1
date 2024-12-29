import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const VaishnoDeviMandir = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Vaishno Devi Mandir in Vrindavan, a sacred temple dedicated to Goddess Vaishno Devi. Learn about its significance, history, and devotional offerings." />
                <meta name="keywords" content="Vaishno Devi Mandir, Vrindavan temple, Hindu pilgrimage, Vrindavan tourism, Goddess Vaishno Devi temple, spiritual travel" />
                <meta name="author" content="GIG Vrindavan" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Vaishno Devi Mandir Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Vaishno Devi Mandir Vrindavan</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Vaishno Devi Mandir"
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
                                    Vaishno Devi Mandir in Vrindavan is a revered shrine dedicated to Goddess Vaishno Devi.
                                    This spiritual abode attracts thousands of devotees seeking blessings, inner peace, and a closer connection to the divine.
                                </p>

                                <Image
                                    src="https://mathuravrindavantourism.co.in/images/places-to-visit/headers/vaishno-devi-dham-mathura-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Vaishno Devi Mandir"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Story of Vaishnodevi dham </h2>
                                <p>
                                    As powerful as the Goddess herself, legend weaves a beautiful story too. As per legend, evil powers threatened the Earth during the Treta Yuga (the second yuga of Hindu mythology). Bhumi, the Earth Goddess, sought assistance from the Trimurti to save herself. Their consorts—Saraswati, Lakshmi, and Parvati—joined forces to create Vaishno Devi because they were powerless. After many fights, the goddess overcame evil and stayed on Earth to defend it.

                                    <br /> #Trivia: She is an Adi Parashakti avatar, and her primary consort is Lord Vishnu. She is Lord Kalki&apos;s future happiness (wife), a forthcoming Shree Vishnu avatar.
                                    <br />

                                    According to Hindu legend, Vaishno Devi&apos;s original home was Ardha Kunwari, located about halfway between Katra town and the cave. Bhairon Nath chased after Vaishno Devi to catch her. When Devi arrived at a shelter on the hill, she summoned Hanuman and instructed him, &quot;I will perform penance in this cave for nine months; please do not allow Bhairon Nath to enter the cave till then.&quot; Hanuman followed his mother&apos;s instructions. As a result, Bhairavnath stayed outside this cave, which is now known as Ardha Kunwari.
                                    Originally, Vaishno Mandir is present in Katra, Jammu, where thousands of people travel each year to seek Maa Vaishno Devi&apos;s blessings. However, some individuals are unable to attend their religious services. Given this, the Jay Kay Trust, led by its Managing Trustee Sh. J C Chaudhry bought the property in 2003 to build the Maa Vaishno Devi Mandir at another of Lord Krishna&apos;s sacred places.

                                    J C Chaudhry is a Maa Vaishno Devi devotee. He completed the massive and beautiful Maa Vaishno Devi Mandir in Vrindavan in May 2010.
                                </p>

                                <h2>Architectural Grandeur</h2>
                                <p>
                                    The temple&apos;s architecture is a harmonious blend of traditional and modern designs. Intricately carved sculptures, vibrant murals,
                                    and a serene sanctum create an atmosphere of spiritual tranquility. The temple&apos;s surroundings are beautifully landscaped,
                                    offering a peaceful retreat for visitors.
                                </p>

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Navratri Celebration:</strong> The Vaishno Devi Mandir becomes a hub of devotion during Navratri, with special rituals, kirtans,
                                    and cultural events. Devotees flock to the temple to seek blessings from the goddess, who is believed to fulfill wishes during this auspicious time.
                                </p>
                                <p>
                                    <strong>Diwali:</strong> The festival of lights is celebrated with grandeur at the temple. The entire complex is illuminated with
                                    lamps and decorations, creating a mesmerizing visual spectacle. Special aartis and bhajans add to the festive spirit.
                                </p>
                                <Image
                                    src="https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2022/10/01/vaishno-devi-gufa-56-bhog_1664647309.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Vaishno Devi Mandir at Night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                                <h2>Vaishno Devi Mandir Darshan and Arti Timings</h2>
                                <p>
                                    The temple is open daily from <strong>6:00 AM to 1:00 PM</strong> and <strong>4:00 PM to 8:00 PM</strong>.
                                    <br />
                                    Mangal Aarti at 6:00 am
                                    <br />
                                    Shringar Aarti (Morning) at 7:00 am
                                    <br />
                                    Bhog Aarti at 1:00 pm
                                    <br />
                                    Shringar Aarti (Evening) at 7:00 pm
                                    <br />
                                    Shayan Aarti at 8:00 pm
                                    <br />
                                    Early mornings and evenings are the best times for a peaceful darshan.
                                </p>

                                <Image
                                    src="https://www.mathuravrindavantourpackages.com/images/temple/slider/maa-vaishno-devi-2.webp"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Vaishno Devi Mandir at Night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Vaishno Devi Mandir?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand is just 2 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Vrindavan Railway Station is located around 1.5 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport is approximately 70 kilometers away, while Delhi&apos;s Indira Gandhi International Airport is around 160 kilometers away.</p>
                                <p>
                                    If you&apos;re planning to visit Mathura, Vrindavan, Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Cuisines to Try Near the Vaishno Devi Mandir</h2>
                                <p>
                                    Vrindavan is famous for its sattvic food offerings. Popular dishes include Kachori, Jalebi, Aloo Puri, and sweets like Pedas and Rabri.
                                    Several restaurants and street food stalls near the temple serve delicious and hygienic meals for devotees and tourists.
                                </p>

                                <h2>Why Visit Vaishno Devi Mandir?</h2>
                                <p>
                                    Whether you&apos;re a spiritual seeker or a cultural enthusiast, Vaishno Devi Mandir offers a unique experience. The temple&apos;s serene
                                    atmosphere, coupled with its rich heritage, makes it a must-visit destination in Vrindavan. Immerse yourself in devotion
                                    and feel the divine presence of Goddess Vaishno Devi.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/ptk6jVMjwjkEHC968"
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
                                        Dive into the sacred heritage of Vrindavan!
                                        <span style={{ color: 'green' }}>Embrace the Divine!</span>
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

export default VaishnoDeviMandir;
