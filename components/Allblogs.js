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
                    Unveil the Mystique of Shri Krishna Ki Nagri Mathura - Explore the <strong><span style={{ color: "orange" }}>Spiritual Essence</span></strong> with Us!
                </p>
                <div className='w-100'>
                    <div className={styles.fullcontainer}>
                        {/* Blog Cards */}
                        <div className={`d-flex ${styles.blogcardContainer}`}>
                            <Blogcard title="Ram Mandir" link="/blogs/ram-mandir" images="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F026e37da-89b9-4b8e-bdf8-8d3c3ba1ab0a?alt=media&token=47ed0118-b9bd-4496-a714-e805ec65df37" />
                            <Blogcard title="Kanak Bhawan" images="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2Fb62ef1d4-647f-4a31-a5ed-c1d50387c868?alt=media&token=92e6e67c-0ea5-4e6d-a3ef-b804ef5c8230" />
                            <Blogcard title="Hanuman Gadhi" images="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2Fdb99d622-6205-45af-889c-39512ec96104?alt=media&token=1185d350-5568-4efe-9d46-544de8ce6af9" />
                            <Blogcard title="Dashrath Mahal" images="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F3e914480-489b-41cc-b222-717bf916effc?alt=media&token=55fa514c-42b2-44a1-a649-69c974ad1c51" />
                            <Blogcard title="Naya Ghat" images="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F182b9ca2-26ab-4da2-a7ff-88702fcca83d?alt=media&token=455794f2-1cb5-4b83-ab69-9164f4faa918" />
                            <Blogcard title="Mani Parvat" images="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F64830f08-fc2b-43b3-893e-f3f799243953?alt=media&token=857c11a2-7260-4fac-9485-15c5cd5a2221" />
                            <Blogcard title="Surya Kund" images="https://firebasestorage.googleapis.com/v0/b/gig-storage.appspot.com/o/blogs%2F8bb72f77-bb08-4f6d-abfd-b747f38830c9?alt=media&token=86116896-d686-405e-a007-a91a94c47b8e" />
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
