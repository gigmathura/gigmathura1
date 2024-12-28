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


    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
        }
        return description;
    };

    // All Blogs Data
    const allBlogs = [
        {
            id: 1,
            title: "Ram Mandir Ayodhya",
            topic: "Places",
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F026e37da-89b9-4b8e-bdf8-8d3c3ba1ab0a?alt=media&token=47ed0118-b9bd-4496-a714-e805ec65df37",
            description: "India's cultural tapestry is woven with threads of history, spirituality, and architectural marvels that reflect its diverse heritage. One such emblematic structure is the Ram Mandir, a place of worship....",
            link: "/blogs/ram-mandir"
        },
        {
            id: 2,
            title: "Kanak Bhawan Ayodhya",
            topic: "Places",
            imageUrl: "https://www.onindianpath.com/wp-content/uploads/2024/03/1000062210-1024x581.jpg",
            description: `Nestled in the sacred city of Ayodhya, Kanak Bhawan stands as a testament to the profound devotion and
                  cultural heritage that define India. This magnificent abode of Lord Ram and Goddess Sita weaves
                  together a tapestry of `,
            link: "/blogs/kanak-bhawan"
        }, {
            id: 3,
            title: "Hanuman Gadhi Ayodhya",
            topic: "Places",
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2Fdb99d622-6205-45af-889c-39512ec96104?alt=media&token=1185d350-5568-4efe-9d46-544de8ce6af9",
            description: ` In the enchanting town of Ayodhya, amidst the divine resonance of ancient legends, stands Hanuman
                  Garhi—a place that encapsulates the essence of devotion and the awe-inspiring miracles associated with
                  Lord Hanuman`,
            link: "/blogs/hanuman-gadhi"
        },
        {
            id: 4,
            title: "Naya Ghat Ayodhya",
            topic: "Places",
            imageUrl: "https://asoulwindow.com/wp-content/uploads/2019/09/ram-ki-pairi-bhavya-deepawali-mahotsav-ayodhya-deepotsav-sarayu-uttar-pradesh-ramayan-26.jpg",
            description: ` Ayodhya, a city steeped in ancient history and spirituality, boasts numerous sites of significance. Among these, Naya Ghat stands out as a symbol of the city's rich heritage, spiritual devotion, and cultural celebrations. With a history that dates back centuries and a role in modern festivals, Naya Ghat is a place where the past and present intertwine seamlessly.`,
            link: "/blogs/naya-ghat"
        }, {
            id: 5,
            title: "Dashrath Mahal Ayodhya",
            topic: "Places",
            imageUrl: "https://cdn1.prayagsamagam.com/media/2023/05/08153547/rtboqaz-768x432.webp",
            description: `  Ayodhya, a city steeped in mythology and history, is home to several iconic structures that tell the
                  tales of ancient India. Among these stands the remarkable Dashrath Mahal, a monument that weaves
                  together history, `,
            link: "/blogs/dashrath-mahal"
        }, {
            id: 6,
            title: " Surya Kund Ayodhya",
            topic: "Places",
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F8bb72f77-bb08-4f6d-abfd-b747f38830c9?alt=media&token=86116896-d686-405e-a007-a91a94c47b8e",
            description: ` Ayodhya, a city renowned for its spiritual heritage, is home to a hidden gem known as Suraj Kund. This ancient reservoir, steeped in history and mythological significance, offers a tranquil escape from the bustling world and provides a space for both reflection and devotion. With its rich legacy, serene ambiance, and spiritual importance, Suraj Kund stands as a testament to Ayodhya's timeless`,
            link: "/blogs/surya-kund"
        }, {
            id: 7,
            title: "Mani Parvat Ayodhya",
            topic: "Places",
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F64830f08-fc2b-43b3-893e-f3f799243953?alt=media&token=857c11a2-7260-4fac-9485-15c5cd5a2221",
            description: ` In the ancient city of Ayodhya, where every stone resonates with the essence of spirituality, Mani Parvat stands as a sacred pinnacle. With its rich history, spiritual significance, and the contemporary allure of its laser show, Mani Parvat offers a unique blend of tradition and modernity, drawing pilgrims and see`,
            link: "/blogs/mani-parvat"
        },
    ];
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
                <title>All Blogs - Explore Ayodhya&apos;s Treasures</title>
                <meta name="description" content="Discover everything you can do in Ayodhya! Explore captivating blogs about Ayodhya&apos;s sacred landmarks, history, and culture. Plan your darshan with our expert guidance as your Local Rishtedars." />
                <meta name="keywords" content="Places to visit in ayodhya,Ayodhya blogs, Ram Mandir, Hanuman Garhi, Kanak Bhawan, spiritual travel, Indian culture, heritage places, Ayodhya tourism" />
                <meta name="author" content="GIG Ayodhya" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="Explore Ayodhya&apos;s Treasures" />
                <meta property="og:description" content="Discover everything you can do in Ayodhya! Explore captivating blogs about Ayodhya&apos;s sacred landmarks, history, and culture. Plan your darshan with our expert guidance as your Local Rishtedars." />
                <meta property="og:image" content="/logo.png" /> {/* Replace with your feature image URL */}
                <meta property="og:url" content="/logo.png" />
                <meta property="og:type" content="website" />

             
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
                    {allBlogs.map((blog) => (
                        <div key={blog.id} className={`${styles.blogCard} ${styles.allblogcard}`} style={{ color: "black", cursor: "pointer" }} onClick={() => router.push(blog.link)}>
                            <div className={styles.allblogcardcorosaldiv}>
                                <div className={styles.imageblog} style={{ background: "grey" }} >
                                    <Image src={blog.imageUrl} alt={blog.title} width={400} height={200} objectFit='cover' loading="lazy" />
                                </div>
                            </div>
                            <div className={styles.allblogcarddesc}>
                                <p className='text-muted mx-2 mb-1' style={{ border: "1px solid #9DC0E4", borderRadius: "3px", color: "#9DC0E4", fontSize: "13px", padding: "0 3px", height: "max-content", width: "max-content", marginLeft: "10px", background: "#EDF2F7" }}>{blog.topic}</p>
                                <h3 className='mb-0 p-0 mx-2'>{blog.title}</h3>
                                <p className='mt-1 text-muted mx-2'>{truncateDescription(blog.description,maxLength)}</p>
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
                            <a href="mailto:gigayodhya@gmail.com" style={{ textDecoration: "none", color: "black" }}>Mail Us At:gigayodhya@gmail.com</a>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
