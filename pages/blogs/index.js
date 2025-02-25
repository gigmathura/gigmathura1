import { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';
import styles from '../../styles/Allblogspage.module.css';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel'; // Import the carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Head from 'next/head';
import packageObjectData from '../../data/student-enlightment.json';
import Link from 'next/link.js';
import { useRouter } from 'next/router';

export default function Allblogs() {
    const router = useRouter();
    const mainContainerRef = useRef(null);
    const aboveMainContainerRef = useRef(null);
    const [maxLength, setMaxLength] = useState(300);
    useEffect(() => {
        const updateMaxLength = () => {
            setMaxLength(window.innerWidth <= 768 ? 150 : 200);
        };

        // Set the initial value
        updateMaxLength();

        // Listen for window resize events
        window.addEventListener('resize', updateMaxLength);

        return () => {
            window.removeEventListener('resize', updateMaxLength);
        };
    }, []);

    const [activeButton, setActiveButton] = useState('All');
    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
        }
        return description;
    };

    // All Blogs Data
    const allBlogs = [
        {
            "id": 20,
            "title": "Places to Visit in Mathura",
            "topic": "Blog",
            "imageUrl": "https://www.blog.traveltoindia.org/wp-content/uploads/2024/06/explore-mathura-vrindavan-and-barsana.webp",
            "description": `  Lord Krishna's birthplace, Mathura, is deeply significant both historically and spiritually. Located in Uttar Pradesh, this quaint city draws both pilgrims and tourists. There are a ton of things to do in Mathura and nearby Vrindavan, whether you&apos;re planning a quick getaway or a longer stay. The best places to visit in Mathura and Vrindavan will be discussed here, along with family-friendly locations, romantic getaways,`,
            "link": "/blogs/places-to-visit-in-mathura"
        },

        {
            "id": 1,
            "title": "Bhooteshwar Mahadev",
            "topic": "Places",
            "imageUrl": "https://mathuravrindavantourism.co.in/images/places-to-visit/headers/bhuteshwar-mahadev-temple-mathura-header-mathura-tourism.jpg.jpg",
            "description": ` Nestled in the heart of Mathura, the Bhooteshwar Mahadev Temple stands as a sacred abode of Lord Shiva.
                                    Revered by locals and pilgrims alike, this temple is steeped in mythology and offers a serene escape
                                    into spirituality`,
            "link": "/blogs/bhooteshwar-mahadev"
        },
        {
            "id": 2,
            "title": "Shri Krishna Janmbhoomi",
            "topic": "Places",
            "imageUrl": "https://static.langimg.com/photo/imgsize-196426,msid-92701315/navbharat-times.jpg",
            "description": "Discover Shri Krishna Janmbhoomi, the birthplace of Lord Krishna, and immerse yourself in the rich cultural and spiritual heritage of Mathura...",
            "link": "/blogs/krishna-janmbhoomi"
        },
        {
            "id": 3,
            "title": "Raman Reti",
            "topic": "Places",
            "imageUrl": "https://faujitoursandtravels.com/wp-content/uploads/2024/09/2022-11-15-1.jpg",
            "description": "Raman Reti is a tranquil spot where Lord Krishna is believed to have played in his childhood, offering a peaceful and divine experience...",
            "link": "/blogs/raman-reti"
        },
        {
            "id": 4,
            "title": "84 Khamba Mandir",
            "topic": "Places",
            "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH-6WB-K4MiveXQRrZA5vK2yWZbLus912wgZj9Udgz6uguiiDNwwBnpIHgK__2gbYhbk5gsLxXtlgIv9FIvNCDmb8CQlqaz1hS2m67oKOQIWxDNxnyHjsVCAOKaHq2-OPkUMr8tnUE_5iP/",
            "description": "Explore the fascinating 84 Khamba Mandir, a historical and spiritual marvel symbolizing divine significance in Mathura...",
            "link": "/blogs/chaurasi-khamba"
        },
        {
            "id": 5,
            "title": "Nand Bhawan Temple",
            "topic": "Places",
            "imageUrl": "https://www.brijwale.com/wp-content/uploads/2021/01/DSC_0143.jpg",
            "description": "Nand Bhawan Temple holds immense importance as the residence of Nanda Maharaj, where Lord Krishna spent his childhood...",
            "link": "/blogs/nand-bhawan-nandgaon"
        },
        {
            "id": 6,
            "title": "Chintaharan Mahadev",
            "topic": "Places",
            "imageUrl": "https://www.jagranimages.com/images/newimg/17072022/17_07_2022-chinta_harn_mandir_mathura_22899486.webp",
            "description": "Visit Chintaharan Mahadev Temple, a sacred place where devotees come to rid themselves of worries and find solace...",
            "link": "/blogs/chintaharan-mahadev"
        },
        {
            "id": 7,
            "title": "Brahmand Ghat",
            "topic": "Places",
            "imageUrl": "https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/630f410176f34f0009b100fa.jpeg",
            "description": "Brahmand Ghat is a spiritually significant site where Lord Krishna revealed the universe within his mouth to Yashoda Mata...",
            "link": "/blogs/brahmand-ghat"
        },
        {
            "id": 8,
            "title": "Shri Dwarkadish Mandir",
            "topic": "Places",
            "imageUrl": "https://apnayatra.com/wp-content/uploads/2023/06/Dwarkadhish-Temple-Mathura6.jpg",
            "description": "Shri Dwarkadish Mandir is a famous temple in Mathura, known for its intricate architecture and devotion to Lord Krishna...",
            "link": "/blogs/dwarkadhish-mandir"
        },
        {
            "id": 9,
            "title": "Vishram Ghat",
            "topic": "Places",
            "imageUrl": "https://mathuravrindavantourism.co.in/images/places-to-visit/headers/vishram-ghat-mathura-tourism-entry-fee-timings-holidays-reviews-header.jpg",
            "description": "Vishram Ghat, located on the Yamuna River, is a revered place where Lord Krishna is said to have rested after defeating Kansa...",
            "link": "/blogs/vishram-ghat"
        },
        {
            "id": 10,
            "title": "Shri Bankey Bihari",
            "topic": "Places",
            "imageUrl": "https://brijkerasiya.org/wp-content/uploads/2024/07/banke-bihari-temple.jpg",
            "description": "Visit Shri Bankey Bihari Temple, a beloved temple in Vrindavan dedicated to the playful form of Lord Krishna...",
            "link": "/blogs/bankey-bihari"
        },
        {
            "id": 11,
            "title": "Shri Radha Raman Ji",
            "topic": "Places",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Radha_Raman_Temple_2.jpg",
            "description": "Shri Radha Raman Ji Temple is a spiritually enriching destination, showcasing the divine union of Radha and Krishna...",
            "link": "/blogs/radha-raman"
        },
        {
            "id": 12,
            "title": "Shri Radha Vallabh Ji",
            "topic": "Places",
            "imageUrl": "https://cdn1.prayagsamagam.com/media/2023/05/06161805/Shri-Radha-Vallabh-Temple-Vrindavan-4.webp",
            "description": "Explore Shri Radha Vallabh Ji Temple, an iconic Vrindavan temple highlighting the eternal love of Radha and Krishna...",
            "link": "/blogs/radha-vallabh"
        },
        {
            "id": 13,
            "title": "Shri Rang Ji Maharaj",
            "topic": "Places",
            "imageUrl": "https://thetravelcurry.com/wp-content/uploads/2019/09/DSC_1249-polarr.jpg",
            "description": "Visit Shri Rang Ji Maharaj Temple, a blend of North and South Indian architectural styles and dedicated to Lord Ranganatha...",
            "link": "/blogs/rangji-maharaj"
        },
        {
            "id": 14,
            "title": "Nidhivan",
            "topic": "Places",
            "imageUrl": "https://anandamclarksinn.com/upload/96640.jpg",
            "description": "Nidhivan, a sacred forest in Vrindavan, is believed to be the place where Radha and Krishna perform their divine Raas Lila every night...",
            "link": "/blogs/nidhivan"
        },
        {
            "id": 15,
            "title": "Seesh Mahal",
            "topic": "Places",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWq1YGVt2GZGOgJ_r-1OCP9IsRJPri4xDJww&s",
            "description": "Explore the exquisite beauty of Seesh Mahal, a marvel of architecture adorned with intricate glasswork and rich history.",
            "link": "/blogs/seesh-mahal"
        },
        {
            "id": 16,
            "title": "Shri Vaishno Devi Dham",
            "topic": "Places",
            "imageUrl": "https://mathuravrindavantourism.co.in/images/places-to-visit/headers/vaishno-devi-dham-mathura-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
            "description": "Embark on a spiritual journey to Shri Vaishno Devi, a revered Hindu shrine nestled amidst the Trikuta mountains.",
            "link": "/blogs/vaishnodevi-mandir"
        },
        {
            "id": 17,
            "title": "Prem Mandir",
            "topic": "Places",
            "imageUrl": "https://vrindavan.com/wp-content/uploads/2022/10/prem-mandir-vrindavan-1024x576.jpeg",
            "description": "Witness the grandeur of Prem Mandir, a temple that celebrates divine love through magnificent sculptures and vibrant light shows.",
            "link": "/blogs/prem-mandir"
        },
        {
            "id": 18,
            "title": "ISKCON Temple Vrindavan",
            "topic": "Places",
            "imageUrl": "https://luxevista.in/wp-content/uploads/2024/01/Sri-Sri-Krishna-Balaram-Mandir-ISKCON-Vrindavan.png",
            "description": "Visit the serene ISKCON Temple in Vrindavan, a spiritual hub for devotees of Lord Krishna and a beacon of peace and devotion.",
            "link": "/blogs/iskcon-mandir"
        },
        {
            "id": 19,
            "title": "Madan Mohan Temple",
            "topic": "Places",
            "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/a8/81/dd/madan-mohan-temple.jpg?w=1200&h=-1&s=1",
            "description": "Discover the historic Madan Mohan Temple, a cherished site that stands as a testament to the devotion of Lord Krishna's followers.",
            "link": "/blogs/radha-madan-mohan"
        },
        {
            "id": 23,
            "title": "Gowardhan Parvat",
            "topic": "Places",
            "imageUrl": "https://shrimathuraji.com/wp-content/uploads/2024/05/Goverdhan-Parikrama-4.jpg",
            "description": `Gowardhan Parvat, also known as Govardhan Hill, is a prominent pilgrimage site in the Braj region of Uttar Pradesh, India.
                                    Associated with the divine pastimes of Lord Krishna, this sacred hill holds a special place in Hindu mythology and devotion.
                                    It is a must-visit for devotees seeking spiritual fulfillment`,
            "link": "/blogs/gowardhan-parvat"
        },
        {
            "id": 21,
            "title": "Charan Pahadi",
            "topic": "Places",
            "imageUrl": "https://i.ytimg.com/vi/41KdAVkMsrw/maxresdefault.jpg",
            "description": `  Charan Pahadi, located in Nandgaon, Uttar Pradesh, is a spiritually significant site in the Braj region. This sacred hill
                                    is revered by devotees as the place where Lord Krishna imprinted his divine footprints during his playful and miraculous pastimes.
                                    Surrounded by breathtaking landscapes, it holds immense religious importance and is a must-visit for those on a spiritual journey.
`,
            "link": "/blogs/charan-pahadi-nandgaon"
        },
        {
            "id": 22,
            "title": "GovindDev Ji Temple",
            "topic": "Places",
            "imageUrl": "https://www.trawell.in/admin/images/upload/941139133Vrindavan_Govind_Dev_Temple_Main.jpg",
            "description": `Nestled in the sacred town of Vrindavan, Govind Ji Temple stands as a testimony to devotion and architectural brilliance. Dedicated to Lord Krishna, this temple is not just a place of worship but also a marvel of 16th-century design that attracts thousands of pilgrims every year.`,
            "link": "/blogs/govinddevji-temple"
        },
        {
            "id": 24,
            "title": "Kusum Sarovar",
            "topic": "Places",
            "imageUrl": "https://pbs.twimg.com/media/FCY-ovhUUAMDGup.jpg",
            "description": `Situated on the sacred Govardhan Hill in Mathura, Kusum Sarovar is a beautiful and serene reservoir steeped in mythological and historical significance. This enchanting site is believed to be a place where Radha and Krishna spent divine moments together amidst the fragrant groves of flowers.
`,
            "link": "/blogs/kusum-sarovar-gowardhan"
        },
        {
            "id": 25,
            "title": "Radha Rani Barsana",
            "topic": "Places",
            "imageUrl": "https://asoulwindow.com/wp-content/uploads/2022/03/Shri-Radha-Rani-Mahal-Barsana-Uttar-Pradesh-1024x768.jpg",
            "description": `Nestled amidst the lush green hills of Barsana, Radha Rani Temple is one of the most revered shrines dedicated to Goddess Radha. This sacred site attracts thousands of devotees every year who seek blessings and wish to connect with the divine love of Radha and Krishna.`,
            "link": "/blogs/radharani-barsana"
        }
    ]
    const filteredBlogs = allBlogs.filter(blog => {
        if (activeButton === 'All') return true;
        return blog.topic === activeButton;
    });

    useEffect(() => {
        // Adjust the height of `abovemaincontainer` to match `maincontainer`
        if (mainContainerRef.current && aboveMainContainerRef.current) {
            aboveMainContainerRef.current.style.height = `${mainContainerRef.current.offsetHeight}px`;
        }
    }, []); // Run once on mount

    return (
        <div>
            <Head>
                {/* Basic Meta Tags */}
                <title>All Blogs - Explore Mathura&apos;s Treasures</title>
                <meta name="description" content="Discover everything you can do in Mathura! Explore captivating blogs about Mathura&apos;s sacred landmarks, history, and culture. Plan your darshan with our expert guidance as your Local Rishtedars." />
                <meta name="keywords" content="Places to visit in mathura,mathura blogs spiritual travel, Indian culture, heritage places, Mathura tourism" />
                <meta name="author" content="Things to do in Mathura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="Explore Mathura&apos;s Treasures" />
                <meta property="og:description" content="Discover everything you can do in Mathura! Explore captivating blogs about Mathura&apos;s sacred landmarks, history, and culture. Plan your darshan with our expert guidance as your Local Rishtedars." />
                <meta property="og:image" content="/logo.png" /> {/* Replace with your feature image URL */}
                <meta property="og:url" content="/logo.png" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.gigdarshan.com/blogs" />

                {/* Favicon */}

                {/* Additional Resources (Optional) */}
            </Head>

            <Navbar />
            <hr />

            <div className="share text-center d-flex align-items-center justify-content-center flex-column">
                <div className="mr-3">Didnt <span style={{ color: "red" }}> Planned?</span>
                    <p className='text-muted m-0 text-center mb-2' style={{ fontSize: "2vmin" }}>Plan Your Full Darshan With Us! You Should See What We Are <span style={{ color: "green" }}> Offering!</span></p>
                    <p className='m-0 text-center mb-2' style={{ color: "orange" }}>YOU DONT HAVE TO PAY!</p>

                </div>
                <Link href="/" className="btn btn-danger">Plan Now!</Link>
            </div>
            <hr />

            <div className={`${styles.filterButtons} ${styles.filterButtonsMob}`} style={{ position: "" }}>

                <button
                    className={activeButton === 'All' ? styles.active : styles.inactive}
                    onClick={() => setActiveButton('All')}
                >
                    All
                </button>
                <button
                    className={activeButton === 'Places' ? styles.active : styles.inactive}
                    onClick={() => setActiveButton('Places')}

                >
                    Places
                </button>
                <button
                    className={activeButton === 'Blog' ? styles.active : styles.inactive}
                    onClick={() => setActiveButton('Blog')}

                >
                    Blog
                </button>
            </div>
            {/* Above Main Content */}
            <div
                ref={aboveMainContainerRef}
                className={styles.abovemaincontainer}
            ></div>
            {/* Main Content */}

            <div ref={mainContainerRef} className={styles.maincontainer}>
                {/* Package Overview Section */}
                {/* <h2 className='text-dark mx-2'>All Blogs</h2> */}

                <div className={styles.packageoverview}>
                    <div className={`${styles.filterButtons} ${styles.filterButtonsDesk}`} style={{ position: "" }}>

                        <button
                            className={activeButton === 'All' ? styles.active : styles.inactive}
                            onClick={() => setActiveButton('All')}
                        >
                            All
                        </button>
                        <button
                            className={activeButton === 'Places' ? styles.active : styles.inactive}
                            onClick={() => setActiveButton('Places')}

                        >
                            Places
                        </button>
                        <button
                            className={activeButton === 'Blog' ? styles.active : styles.inactive}
                            onClick={() => setActiveButton('Blog')}

                        >
                            Blog
                        </button>
                    </div>
                    {filteredBlogs.map((blog) => (
                        <div key={blog.id} className={`${styles.blogCard} ${styles.allblogcard}`} style={{ color: "black", cursor: "pointer" }} onClick={() => router.push(blog.link)}>
                            <div className={styles.allblogcardcorosaldiv}>
                                <div className={styles.imageblog} style={{ background: "grey", overflow: "hidden" }} >
                                    <img src={blog.imageUrl} alt={blog.title} style={{ height: "100%", width: "100%" }} />
                                </div>
                            </div>
                            <div className={styles.allblogcarddesc}>
                                <p className='text-muted mx-2 mb-1' style={{ border: "1px solid #9DC0E4", borderRadius: "3px", color: "#9DC0E4", fontSize: "13px", padding: "0 3px", height: "max-content", width: "max-content", marginLeft: "10px", background: "#EDF2F7" }}>{blog.topic}</p>
                                <h3 className='mb-0 p-0 mx-2'>{blog.title}</h3>
                                <p className='mt-1 text-muted mx-2'>{truncateDescription(blog.description, maxLength)}</p>
                                <Link href={blog.link} style={{ color: "rgb(62, 131, 192)" }}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cost Section */}
                <div className={styles.costdiv}>
                    <h3 className='mb-2 text-dark'>Our <span style={{ color: "orange" }}>Offerings!</span></h3>
                    <div className={styles.itinerarycirclediv}>
                        <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fa fa-map" aria-hidden="true" style={{ fontSize: "40px" }}></i>
                        </div>
                        <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                            Customized Itineraries
                        </h6>
                    </div>
                    <div className={styles.itinerarycirclediv} >
                        <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fa fa-bed" aria-hidden="true" style={{ fontSize: "40px" }}></i>
                        </div>
                        <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                            Accomodation
                        </h6>
                    </div>
                    <div className={styles.itinerarycirclediv} >
                        <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fa fa-car" aria-hidden="true" style={{ fontSize: "40px" }}></i>
                        </div>
                        <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                            InCity Transfer
                        </h6>
                    </div>
                    <div className={styles.itinerarycirclediv} >
                        <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fa fa-child" aria-hidden="true" style={{ fontSize: "40px" }}></i>
                        </div>
                        <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                            Guide
                        </h6>
                    </div> <div className={styles.itinerarycirclediv} >
                        <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fa fa-gamepad" aria-hidden="true" style={{ fontSize: "40px" }}></i>
                        </div>
                        <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                            Local Activities
                        </h6>
                    </div>
                    <div className={styles.itinerarycirclediv} >
                        <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fa fa-fire" aria-hidden="true" style={{ fontSize: "40px" }}></i>
                        </div>
                        <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                            Pooja Arrangements
                        </h6>
                    </div>


                    <div style={{ background: "#faecd4s", borderRadius: "25px", overflow: "hidden", border: "1px solid #ffd68f", marginBottom: "10px", width: "100%" }} >
                        <h4 style={{ padding: "15px", color: "black", margin: "0" }}><span><i className="fa fa-comments"></i></span> Need help?</h4>
                        <div style={{ paddingLeft: "15px", paddingBottom: "15px" }}>
                            <a href="tel:7505866498" style={{ textDecoration: "none", color: "black" }}>Call Us At:7505866498</a><br />
                            <a href="mailto:info@gigdarshan.com" style={{ textDecoration: "none", color: "black" }}>Mail Us At:info@gigdarshan.com</a>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
