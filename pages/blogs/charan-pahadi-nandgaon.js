import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const CharanPahadi = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore the divine Charan Pahadi in Nandgaon, a sacred place associated with Lord Krishna&apos;s childhood and pastimes in Braj." />
                <meta name="keywords" content="Charan Pahadi, Nandgaon, Krishna Leela, pilgrimage sites, Hindu mythology, Lord Krishna" />
                <meta name="author" content="GIG Mathura" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Charan Pahadi - Sacred Steps of Divinity</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Charan Pahadi, Nandgaon</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Charan Pahadi"
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
                                    Charan Pahadi, located in Nandgaon, Uttar Pradesh, is a spiritually significant site in the Braj region. This sacred hill
                                    is revered by devotees as the place where Lord Krishna imprinted his divine footprints during his playful and miraculous pastimes.
                                    Surrounded by breathtaking landscapes, it holds immense religious importance and is a must-visit for those on a spiritual journey.
                                </p>

                                <Image
                                    src="https://i.ytimg.com/vi/41KdAVkMsrw/maxresdefault.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Charan Pahadi View"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical and Mythological Significance</h2>
                                <p>
                                    The name &apos;Charan Pahadi&apos; translates to &apos;The Hill of Footprints.&apos; According to Hindu mythology, this is one of the locations
                                    where Lord Krishna performed his divine leelas (playful acts) as a child. The imprints of Krishna&apos;s feet on the rocks are believed to be
                                    eternal and are worshipped by devotees from around the world. This site is also closely associated with the bond between Krishna
                                    and the gopis (cowherd maidens) who often gathered here to rejoice in his divine presence.<br/>
                                    The footprints of Shri Krishna are inscribed on the Charan hill (Nandishwar Hill) of Shri Nandgaon. At the time of cow herding, Shri Krishna climbed atop this Nandishwar mountain and played His flute to gather lakhs of cows. The rocks of this mountain were melted by the compassionate and sweet voice of the flute and the imprints of Krishna&apos;s Lotus Feet were marked here. Lord Shiva was pleased to see this and said to Shri Krishn &quot;O Lord, I am blessed, Your footprints will remain like this till eternity&quot;.
                                    The context of the footprints here has come twice in Shrimad Bhagwat, the first context is on the arrival of Akrur Ji, and the second is on the arrival of Uddhav Ji.
                                    When the supreme devotee Akrur was coming from Mathura to Nandgaon to take Krishna and Balram on the orders of Kansa, then on reaching Nandgaon, the footprints of Krishna were visible on the top of the hill, in the sand and everywhere. He started crying and rolled in the dust of these Lotus Feet after getting overwhelmed with ecstasy. Even today, the devotees get overwhelmed by seeing the footprints of Shri Krishna.
                                </p>

                                <Image
                                    src="https://pravase.co.in/admin_pravase/uploads/place/Charan-Pahari-Foot-Print-of-Lord-Krishna-Nand-Gaon_1653365343.JPG"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Charan Pahadi Footprints"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Pilgrimage and Rituals</h2>
                                <p>
                                    Charan Pahadi is a cherished destination for pilgrims who seek to connect with the divine energy of Krishna. Devotees offer prayers
                                    and perform rituals at the sacred spots, including lighting lamps and singing devotional hymns. Many visitors circumambulate the
                                    hill barefoot as an act of devotion and surrender to the Lord. The tranquil surroundings add to the spiritual experience, making it
                                    a memorable visit.
                                </p>

                                <h2>Natural Beauty and Serenity</h2>
                                <p>
                                    Besides its spiritual essence, Charan Pahadi offers a serene environment with lush greenery and picturesque views. The hill is a
                                    haven for nature lovers and photographers alike. The sunrise and sunset views from the top of the hill are mesmerizing, creating a
                                    perfect blend of spirituality and natural beauty.
                                </p>

                                <Image
                                    src="https://faujitoursandtravels.com/wp-content/uploads/2024/10/2024-05-09.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Serene View of Charan Pahadi"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    Charan Pahadi comes alive during festivals like <strong>Janmashtami</strong> and <strong>Radhashtami</strong>. Devotees from across the globe
                                    gather here to celebrate Krishna&apos;s birth and divine pastimes. Special prayers, bhajans (devotional songs), and cultural programs
                                    make these festivals a grand celebration of faith and devotion.
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
                                        href="https://maps.app.goo.gl/UqYfp2kByrXmVPN66"
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
                                        Embrace the divine energy of Charan Pahadi!
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

export default CharanPahadi;
