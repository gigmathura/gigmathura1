import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ShriKrishnaJanmabhoomi = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Shri Krishna Janmabhoomi, the birthplace of Lord Krishna in Mathura. Discover its history, architecture, and spiritual significance for devotees worldwide." />
                <meta name="keywords" content="Mathura, Shri Krishna Janmabhoomi, Krishna birthplace, temples in Mathura, Krishna Janmasthan, Mathura tourism, Hindu pilgrimage" />
                <meta name="author" content="GIG Mathura" />
                <link rel="canonical" href="https://www.gigdarshan.com/blogs/krishna-janmbhoomi" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Shri Krishna Janmabhoomi Mathura</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Shri Krishna Janmabhoomi</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Shri Krishna Janmabhoomi"
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
                                    Located in the sacred city of Mathura, Shri Krishna Janmabhoomi holds immense significance for devotees of Lord Krishna.
                                    It is revered as the birthplace of Lord Krishna, an incarnation of Lord Vishnu, who played a pivotal role in shaping
                                    the spiritual and cultural ethos of India. For millions of visitors, this divine site is a spiritual beacon that
                                    connects them with their faith.
                                </p>

                                <Image
                                    src="https://static.langimg.com/photo/imgsize-196426,msid-92701315/navbharat-times.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Shri Krishna Janmabhoomi"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Historical Significance</h2>
                                <p>
                                    Shri Krishna Janmabhoomi is steeped in history and mythology. It is believed to be the site where Lord Krishna
                                    was born to Queen Devaki and King Vasudeva, imprisoned by the tyrant King Kansa. The prison cell, now known as the
                                    Garbha Griha, remains a focal point for devotees. Over centuries, the site has witnessed numerous reconstructions
                                    and stands today as a symbol of devotion and resilience.
                                    Shri Krishna Janmasthan Temple, also known as Shri Krishna Janmabhoomi temple, is centred on the prison cell where Lord Krishna&apos;s parents, Mata Devaki and Vasudeva, were imprisoned by his uncle Kansa.

                                    Aside from the prison cell, the Krishna Janmasthan Temple contains other temples devoted to the god. The holy ambience and purity of the temple infuse the heart with confidence that this is the spot where Lord Krishna revealed himself.
                                    <br />
                                    #Trivia: Several kings destroyed it numerous times before being rebuilt with financial assistance from industrialists.

                                    The Krishna Janmasthan Temple sees heavy footfall during holidays such as Janmashtami (The birthday of Lord Krishna), Basant Panchami, Holi, and Diwali.
                                    <br />
                                    #Note: Cameras aren&apos;t allowed due to security purposes. Most Mathura temples prohibit cell phones and cameras, therefore try to avoid them when visiting any temple
                                </p>

                                <h2>Architectural Grandeur</h2>
                                <p>
                                    The temple complex is a masterpiece of Indian temple architecture. From the intricately carved pillars to the serene
                                    sanctum, every corner of the temple exudes divine energy. The vibrant murals depicting scenes from Krishna&apos;s life
                                    add to the spiritual ambiance.
                                    The Sri Krishna Janmasthan Temple houses the Keshavdev temple, the Garbha Griha shrine, and the Bhagavata Bhavan.
                                    <br />
                                    <strong>Keshavdev Temple:</strong> Ramkrishna Dalmia constructed the Keshavdev Temple south of the Shahi Eidgah in honour of his mother, Jathia Devi Dalmia. The construction began on June 29, 1957, and was dedicated on September 6, 1958, by Hanuman Prasad Poddar.
                                    <br />
                                    <strong>Garbha Griha Shrine:</strong> It is the location of Krishna&apos;s prison cell, where he was born. You can see a marble pavilion and an underground prison cell with a large veranda on the site. A temple devoted to the eight-handed goddess Yogmaya stands nearby.
                                    <br />
                                    <strong>Bhagvat Bhavan:</strong> The temple is dedicated to Srimad Bhagavata, built on February 11, 1965.
                                    <br />
                                    It has five shrines: the main shrine has six-foot-tall statues of Radha and Krishna, with the shrine of Balarama, Subhadra, and Jagannath on the right, the temple of Rama Lakshman and Sita on the left, Garuda Stambha and Chaitanya Mahaprabhu in front of Jagannatha shrine, and Hanuman in front of Ram shrine, the Durga temple, and the Shivalinga temple.

                                    The paintings on the assembly hall&apos;s ceiling, walls, and pillars represent Krishna and his disciples. In addition, you can see inscriptions of the verses of the Bhagavad Gita on the walls of the circumambulation walkway.
                                </p>
                                <Image
                                    src="https://uptourism.gov.in/images/I_201505021427133133.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    <strong>Janmastmi Celebration:</strong> Shri Krishna Janmabhoomi is a hub of festivities, especially during <strong>Janmashtami</strong>, the birthday
                                    of Lord Krishna. The temple comes alive with kirtans, devotional songs, and grand rituals, drawing thousands of devotees
                                    from across the globe. Holi, the festival of colors, is another grand celebration that showcases the vibrant
                                    traditions of Mathura.
                                    The celebration begins at midnight of Lord Krishna&apos;s birth when the Pujaris house the deity in the Garbha Griha, where it is ritualistically bathed with milk and curd, clothed in traditional attire put in the cradle.

                                    After that, the worshippers rock the cradle and sing prayers and devotional songs. People believe that any wish made while swinging the cradle comes true. Then, the devotees offer the lord panchamrit and Chappan bhog (56 dishes), further distributed among other devotees to break their fast.
                                    <br />
                                    #Trivia- Every year, about eight lakh devotees visit Mathura and Vrindavan to participate in the Janmashtami festival, offer prayers, and witness the spectacular celebration of Lord Krishna&apos;s birth.
                                </p>
                                <p>
                                    <strong>Holi Celebration:</strong> Holi is one of the most well-known festivals of Mathura. The occasion is celebrated as the most colourful day in Mathura and lasts for several days. It begins on Phalgun Amavasya and gains prominence on Ekadashi, decking the entire city with its vibrant hues.

                                    During Holi, folk and local singers sing devotional and specialised songs in Mathura&apos;s Krishna Janmasthan Temple. Moreover, on the eve of Holika Dahan, artists perform a unique theatrical performance that represents the classic tale of Holika and Prahalad.
                                </p>
                                <p>
                                    <strong>Basant Panchmi:</strong> The Mathuravasis (people of Mathura) celebrate Basant Panchmi in a unique style at Krishna Janmasthan Temple. The temple&apos;s trust bedecks the idol of Lord Krishna with yellow and golden attire with glittering embellishments.

                                    All of Krishna&apos;s temples, as well as the entire city, are painted yellow. The yellow light lends a special touch to the celebration. Every temple in Mathura serves a special bhog of &apos;kheer&apos; packed with saffron and yellow rice.

                                    People come to experience the joy of the festival and see the eye-catching decorations of the temples of Mathura.
                                </p>
                                <h2>Sri Krishna Janmasthan Mathura Darshan & Aarti Timings</h2>
                                <p>
                                    In Summer the temple is open daily from <strong>5:00 AM to 12:00 PM</strong> and <strong>4:00 PM to 9:30 PM</strong>.
                                    In Winter the temple is open daily from <strong>5:30 AM to 12:00 PM</strong> and <strong>3:00 PM to 8:30 PM</strong>.
                                    <br />
                                    Mangal Aarti at 5:30 am
                                    <br />
                                    Makhan Bhog at 8:00 am
                                    <br />
                                    Sandhya Aarti at 6:00 pm
                                    <br />
                                    Early mornings and evenings are the best times for a peaceful darshan.
                                </p>

                                <Image
                                    src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/05/a776793448bfe8d982c8f11eee7caac1_1000x1000.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Shri Krishna Janmabhoomi at Night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Shri Krishna Janmabhoomi?</h2>
                                <p><strong>Nearest Bus Stop:</strong> The Mathura Bus Stand is just 3.5 kilometers away from the temple.</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction is located around 3.2 kilometers away.</p>
                                <p><strong>Nearest Airport:</strong> The nearest airport is in Agra, approximately 65 kilometers away. Delhi&apos;s Indira Gandhi International Airport is around 150 kilometers away.</p>
                                <p>
                                    If you&apos;re planning to visit Mathura, Vrindavan, Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>
                                <h2>Cuisines to Try Near the Shri Krishna Janmasthan Temple</h2>
                                <p>Mathura Ke Pede, a type of sweet dessert created from condensed milk, is a local speciality. Other dishes include Kachori, Jalebi, Chaat, Panipuri, Samosa, Dhokla, Aloo Tikki, and Lassi. There are also traditional North Indian dishes available.

                                    Brijwasi Mithaiwale is the most famous restaurant near the Shri Krishna Janmasthan Temple. Dosa Plaza and Zaika are other places to delight your taste buds.

                                    The best dessert places are Baskin Robbins, Giani&apos;s Ice cream Parlour, and the Chocolate room.

                                    All are within a km of the temple.</p>
                                <h2>Why Visit Shri Krishna Janmabhoomi?</h2>
                                <p>
                                    Whether you&apos;re a spiritual seeker or a history enthusiast, Shri Krishna Janmabhoomi offers a unique experience. The
                                    divine atmosphere, coupled with the rich cultural heritage, makes it a must-visit destination for everyone. Feel the
                                    resonance of Krishna&apos;s eternal teachings and immerse yourself in the essence of bhakti.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://www.google.com/maps?ll=27.502326,77.683687&z=14&t=m&hl=en-US&gl=US&mapclient=embed&cid=4911790846997250528"
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

export default ShriKrishnaJanmabhoomi;
