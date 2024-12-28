import Blogcard from './Blogcard.js';
import styles from '../styles/Card.module.css';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';

export default function Allblogs({ allBlog = [] }) {  // Default to empty array
    const router = useRouter();
    const [Lottie, setLottie] = useState(null);  // State to store Lottie instance

    const handleNavigation = () => {
        router.push('/planbot'); // Navigate to the createplan page
    };

    useEffect(() => {
        // Check if window/document is available (indicating we're in the browser)
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            import('lottie-web').then((lottie) => {
                setLottie(lottie);  // Set Lottie once it is loaded
            }).catch(error => {
                console.error('Error loading Lottie:', error);  // Log if loading Lottie fails
            });
        }
    }, []);  // Only run once when the component is mounted

    useEffect(() => {
        // Ensure Lottie is initialized only if Lottie is loaded
        if (Lottie && document.getElementById('boy-waving-animation')) {
            const animationInstance = Lottie.loadAnimation({
                container: document.getElementById('boy-waving-animation'), // Container ID
                renderer: 'svg', // Render as SVG
                loop: true, // Set animation to loop
                autoplay: true, // Start playing on load
                path: '/boy.json', // Path to your Lottie JSON file
            });

            // Cleanup function to destroy the animation on component unmount
            return () => {
                animationInstance.destroy();
            };
        }
    }, [Lottie]);  // Only run when Lottie has been loaded
    return (
        <div className="w-100 d-flex justify-content-center align-items-center" id="plannerdiv">
            <div className={`${styles.explorediv} d-flex justify-content-center align-items-center flex-column`}>
                <h4 className={styles.headingexplore}>
                    Explore <span style={{ color: "red" }}>Mathura</span> With G<span style={{ color: "#ff8134" }}>I</span>G!
                </h4>
                <p className="text-center" style={{ fontSize: "2vmin" }}>
                    Unveil the Mystique of Mathura, Vrindavan, Gokul - Explore the <strong><span style={{ color: "orange" }}>Spiritual Essence</span></strong> with Us!
                </p>
                <div className='w-100'>
                    <div className={styles.fullcontainer}>
                        {/* Blog Cards */}
                        <div className={`d-flex ${styles.blogcardContainer}`}>
                            <Blogcard
                                title="Bhooteshwar Mahadev"
                                link="/blogs/bhooteshwar-mahadev"
                                images="https://mathuravrindavantourism.co.in/images/places-to-visit/headers/bhuteshwar-mahadev-temple-mathura-header-mathura-tourism.jpg.jpg"
                            />
                            <Blogcard
                                title="Shri Krishna Janmbhoomi"
                                link="/blogs/krishna-janmbhoomi"
                                images="https://static.langimg.com/photo/imgsize-196426,msid-92701315/navbharat-times.jpg"
                            />
                            <Blogcard
                                title="Raman Reti"
                                link="/blogs/raman-reti"
                                images="https://faujitoursandtravels.com/wp-content/uploads/2024/09/2022-11-15-1.jpg"
                            />
                            <Blogcard
                                title="84 Khamba Mandir"
                                link="/blogs/chaurasi-khamba"
                                images="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH-6WB-K4MiveXQRrZA5vK2yWZbLus912wgZj9Udgz6uguiiDNwwBnpIHgK__2gbYhbk5gsLxXtlgIv9FIvNCDmb8CQlqaz1hS2m67oKOQIWxDNxnyHjsVCAOKaHq2-OPkUMr8tnUE_5iP"
                            />
                            <Blogcard
                                title="Nand Bhawan Temple"
                                link="/blogs/nand-bhawan"
                                images="https://www.brijwale.com/wp-content/uploads/2021/01/DSC_0143.jpg"
                            />
                            <Blogcard
                                title="Chintaharan Mahadev"
                                link="/blogs/chintaharan-mahadev"
                                images="https://www.jagranimages.com/images/newimg/17072022/17_07_2022-chinta_harn_mandir_mathura_22899486.webp"
                            />
                            <Blogcard
                                title="Brahmand Ghat"
                                link="/blogs/brahmand-ghat"
                                images="https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/630f410176f34f0009b100fa.jpeg"
                            />
                            <Blogcard
                                title="Shri Dwarkadish Mandir"
                                link="/blogs/dwarkadhish-mandir"
                                images="https://apnayatra.com/wp-content/uploads/2023/06/Dwarkadhish-Temple-Mathura6.jpg"
                            />
                            <Blogcard
                                title="Vishram Ghat"
                                link="/blogs/vishram-ghat"
                                images="https://mathuravrindavantourism.co.in/images/places-to-visit/headers/vishram-ghat-mathura-tourism-entry-fee-timings-holidays-reviews-header.jpg"
                            />
                            <Blogcard
                                title="Shri Bankey Bihari"
                                link="/blogs/bankey-bihari"
                                images="https://brijkerasiya.org/wp-content/uploads/2024/07/banke-bihari-temple.jpg"
                            />
                            <Blogcard
                                title="Shri Radha Raman Ji"
                                link="/blogs/radha-raman"
                                images="https://upload.wikimedia.org/wikipedia/commons/c/ce/Radha_Raman_Temple_2.jpg"
                            />
                            <Blogcard
                                title="Shri Radha Vallabh Ji"
                                link="/blogs/radha-vallabh"
                                images="https://cdn1.prayagsamagam.com/media/2023/05/06161805/Shri-Radha-Vallabh-Temple-Vrindavan-4.webp"
                            />
                            <Blogcard
                                title="Shri Rang Ji Maharaj"
                                link="/blogs/rangji-maharaj"
                                images="https://thetravelcurry.com/wp-content/uploads/2019/09/DSC_1249-polarr.jpg"
                            />
                            <Blogcard
                                title="Nidhivan"
                                link="/blogs/nidhivan"
                                images="https://anandamclarksinn.com/upload/96640.jpg"
                            />

                            {/* {allBlog.length > 0 ? (
                                allBlog.map((blog) => (
                                    <Blogcard  title={blog.title} images={blog.imageUrlList} />
                                ))
                            ) : (
                                <p>No blogs available at the moment.</p>  // Fallback message
                            )} */}
                        </div>
                        <div className={styles.mobileheading}>
                            {/* <h6 className={styles.headingexplore}>
                                    Your One Stop <span style={{ color: "#670c0b" }}>Darshan Solution !</span>
                                </h6> */}
                            <h5 className={styles.typewriter2}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Your One Stop <span style="color: #670c0b;">Darshan Solution !</span>',
                                            "Your <span style='color: red;'>Local Rishtedar </span>Of Ayodhya!",
                                            " <span style='color: #334f74;'>Your Guide, Planner,</span> and Support!"
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 30,
                                        typeSpeed: 290,
                                    }}
                                    style={{ lineHeight: "1" }}

                                />
                            </h5>
                            {/* <p className="text-center m-0 p-0 mb-4" style={{ fontSize: "2vmin",marginTop:"-8px" }}>
                                    Your One Stop <strong><span style={{ color: "orange" }}>Darshan Solution !</span></strong>
                                </p> */}
                        </div>
                        <div className={styles.botcontainer}>
                            <div id="boy-waving-animation" className={styles.bot}></div>

                            <div className=' text-light w-100' style={{ maxHeight: "fit-content", marginLeft: "0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h1 className={styles.typewriter}>
                                    <Typewriter
                                        options={{
                                            strings: [
                                                'Namaste, <span style="color: red;">Travellers!</span>', // Red color for this string
                                                'I am <span style="color: #ff920c;">Shravan!</span>',
                                                "Let's Plan Your <span style='color: orange;'>Darshan!</span>", , // Green color for this string
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 30,
                                            typeSpeed: 190,
                                        }}
                                        style={{ lineHeight: "1" }}

                                    />
                                </h1>
                                <div className={`${styles.offerings}`}>
                                    <div className={`d-flex flex-column ${styles.aboutcard} ${styles.acard1}`} >
                                        <div className="d-flex justify-content-center align-items-center w-100 ">
                                            <i className="fa fa-hotel"></i>
                                        </div>
                                        <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                            <h6 className={styles.headingAbout}>
                                                Accomodation
                                            </h6>
                                            <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                                Dharmashalas to 4 Star Hotels
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column ${styles.aboutcard} ${styles.acard2}`} >
                                        <div className="d-flex justify-content-center align-items-center w-100 ">
                                            <i className="fa fa-taxi"></i>
                                        </div>
                                        <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                            <h6 className={styles.headingAbout}>
                                                Travel
                                            </h6>
                                            <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                                E-Rickshaws to AC Cabs
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column ${styles.aboutcard} ${styles.acard3}`} >
                                        <div className="d-flex justify-content-center align-items-center w-100 ">
                                            <i className="fa fa-map" ></i>
                                        </div>
                                        <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                            <h6 className={styles.headingAbout}>
                                                Itineraries
                                            </h6>
                                            <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                                Customize your Itineraries
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column ${styles.aboutcard} ${styles.acard4}`} >
                                        <div className="d-flex justify-content-center align-items-center w-100 ">
                                            <i className="fa fa-user" ></i>
                                        </div>
                                        <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                            <h6 className={styles.headingAbout}>
                                                Companion
                                            </h6>
                                            <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                                24*7 Guided Tours
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column ${styles.aboutcard} ${styles.acard5}`} >
                                        <div className="d-flex justify-content-center align-items-center w-100 ">
                                            <i className="fa fa-gamepad" ></i>
                                        </div>
                                        <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                            <h6 className={styles.headingAbout}>
                                                Activites
                                            </h6>
                                            <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                                Explore Local Activites of the City
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column ${styles.aboutcard} ${styles.acard6}`} >
                                        <div className="d-flex justify-content-center align-items-center w-100 ">
                                            <i className="fa fa-fire" ></i>
                                        </div>
                                        <div className=" d-flex flex-column justify-content-center align-items-center mt-1">
                                            <h6 className={styles.headingAbout}>
                                                Pooja
                                            </h6>
                                            <div className="text-muted w-100 text-center paraabout mt-0" style={{ fontSize: "1.5vmin" }}>
                                                Arrangement of Pooja Rituals
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <p className={styles.taglinepara}>-Your One Stop Darshan Solution</p>
                        <button className={` ${styles.letsplanbtn} btn btn-danger mt-2`} onClick={handleNavigation}>Let&apos;s Plan Your Darshan</button>


                    </div>
                </div>
            </div>
        </div>
    );
}
