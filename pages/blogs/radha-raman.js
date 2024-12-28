import Navbar from '../../components/Navbar.js';
import Head from 'next/head';
import Footer from '../../components/Footer.js';
import Image from 'next/image'; // Import next/image for lazy loading
import styles from '../../styles/Blog.module.css'; // Importing the styles
import Link from 'next/link.js';

const ShriRadhaRamanTemple = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Explore Shri Radha Raman Temple in Vrindavan, a spiritual landmark renowned for its divine idol of Lord Krishna and intricate architectural beauty." />
                <meta name="keywords" content="Vrindavan, Shri Radha Raman Temple, Radha Raman, temples in Vrindavan, Radha Krishna, Hindu pilgrimage" />
                <meta name="author" content="GIG Vrindavan" />
                <link rel="icon" href="/assets/images/favicon.ico" type="image/gif" />
                <title>Shri Radha Raman Temple Vrindavan</title>
            </Head>

            <Navbar />

            <div className={styles.firstSection}>
                <div className={styles.container}>
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h1 className={styles.heading}>Shri Radha Raman Ji, Vrindavan</h1>
                            <div className={`${styles.user} p-4 rounded`}>
                                <div className="d-flex align-items-start">
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        className="img-fluid rounded-circle"
                                        alt="Shri Radha Raman Temple"
                                        width={100}
                                        height={100}
                                        loading="lazy"
                                    />
                                    <div className="d-block">
                                        <span className="d-block">by GIG Vrindavan</span>
                                        <span className="d-block text-muted">28th Dec. 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.blogSection}>
                                <p>
                                    Situated in the heart of Vrindavan, Shri Radha Raman Temple is one of the most revered temples for Vaishnavites.
                                    Known for its self-manifested deity of Lord Krishna, it holds deep spiritual significance and attracts devotees
                                    from all over the world. This temple is a serene blend of devotion, culture, and architectural brilliance.
                                </p>

                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Radha_Raman_Temple_2.jpg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Shri Radha Raman Temple"
                                    width={900}
                                    height={500}
                                    loading="lazy"
                                />

                                <h2>Story of Radha Raman Ji</h2>
                                <p>
                                    Sri Radha Raman temple was founded over 500 years ago. Gopala Bhatta Gosvami, the founder of this temple, set foot in Vrindavana when he was 30.

                                    Following the departure of Chaitanya Mahaprabhu, Gopala Bhatta Gosvami felt an acute estrangement from the Lord. So, to alleviate his devotee&apos;s loneliness, the Lord appeared in Gopala Bhatta&apos;s dream and ordered him to go to Nepal to attain blessings.

                                    Gopala Bhatta took a bath in Nepal&apos;s famed Kali-Gandaki River. To his surprise, numerous Shaligrama Shilas entered his water pot after dipping it in the river. He threw these shilas back into the river only to see them return as he replenished his water pot.

                                    Gopala Bhatta Gosvami discovered a total of twelve such Shaligrama Shilas. Legend has it that a wealthy man once came to Vrindavan and donated various clothing and jewellery for Gopala Bhatta&apos;s Shaligramas. Gopala Bhatta, on the other hand, couldn&apos;t employ them for his round-shaped Shaligramas. Thus, he asked the donor to donate them to someone else. However, the donor refused, and Gopala Bhatta kept them with his Shilas.
                                    After administering naivedya to his Shaligrama shilas on the day of Purnima, Gopala Bhatta laid them to rest in the evening, covering them with a wicker basket. Gopala Bhatta took a short nap late in the evening. He went to the Yamuna river in the early morning to bathe. When he returned from his bath, he revealed the Shaligramas to conduct puja, and among them was a Krishna Deity playing the flute. Only eleven shilas and a Deity remained.

                                    The magnificent three-fold bending shape of tri-bhangananda Krishna had emerged as the "Damodara Shila."

                                    As a result, the Lord fulfilled his desire and turned the stone into the murti of Sri Krishna. Thus, Radharamana&apos;s apparition story, as a narrative description of Krishna-bhakti, emphasises the divine-human relationship of love as the ontologically essential category of ultimate reality.

                                    In this manner, Radha Raman emerged from a holy shaligram shila in the form of a deity. Devotees believe that this picture is alive and that he offers a chosen family the honour of aiding him in his everyday routine.

                                    The male members of the Goswami households prepare the Prasad for Shri Radha Raman Ji in the temple kitchen. In addition, the Goswami households make a calendar in preparation for their own Seva (service) time, and they do Seva in accordance with it. Moreover, important family gatherings are held here, where disciples are invited, and rituals are performed
                                </p>



                                <h2>Architectural Grandeur</h2>
                                <p>
                                    The temple showcases intricate Rajasthani and Mughal architectural styles. The sanctum is adorned with beautiful
                                    carvings and precious stones, while the courtyard features serene spaces for meditation. The detailed artwork
                                    on the temple walls narrates stories from Lord Krishna&apos;s life.
                                </p>

                                <Image
                                    src="https://brajsansar.com/wp-content/uploads/2023/06/image-3-1024x768.png"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Temple Architecture"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>Festivals and Celebrations</h2>
                                <p>
                                    The temple is most vibrant during <strong>Janmashtami</strong> and <strong>Radha Ashtami</strong>, with grand rituals,
                                    melodious kirtans, and devotional offerings. Additionally, <strong>Jhulan Yatra</strong>, celebrated with a
                                    decorated swing for the deity, is a unique experience for visitors.
                                </p>

                                <h2>Shri Radha Raman Ji Darshan Timings & Aarti</h2>
                                <p>
                                    In Summer the temple is open daily from <strong>8:00 AM to 12:00 PM</strong> and <strong>5:30 PM to 9:00 PM</strong>.
                                    In Winter the temple is open daily from <strong>9:00 AM to 12:00 PM</strong> and <strong>5:30 PM to 9:00 PM</strong>.
                                    <br />
                                    In Summer, Mangal Aarti at 4:00 am
                                    <br />
                                    In Winter, Mangal Aarti at 5:30 am
                                    <br />
                                    Early mornings and evenings are the best times for a peaceful darshan.
                                </p>

                                <Image
                                    src="https://s3-ap-southeast-1.amazonaws.com/images.brajrasik.org/5eb2c8585d619b0062bdd758.jpeg"
                                    className={`${styles.bounceLittle} img-fluid`}
                                    alt="Radha Raman Temple at Night"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />

                                <h2>How to Reach Shri Radha Raman Temple?</h2>
                                <p><strong>Nearest Bus Stop:</strong> Vrindavan Bus Stand (2 km away)</p>
                                <p><strong>Nearest Railway Station:</strong> Mathura Junction (12 km away)</p>
                                <p><strong>Nearest Airport:</strong> Agra Airport (75 km away)</p>
                                <p>
                                    If you&apos;re planning to visit Mathura,Vrindavan , Gokul; you can plan with us! We offer <strong>pre-planned packages</strong> that are fully customizable
                                    to suit your preferences. Either start from scratch with <strong>Sharavan, our Plan Bot,</strong> who will help you craft the best
                                    itinerary, or choose from budget-friendly accommodations including dharamshalas and affordable travel options like
                                    e-rickshaws. Additionally, we assign a <strong>dedicated SPOC</strong> (Single Point of Contact) who will be available 24/7 during
                                    your Mathura Darshan, ensuring you make the most of your pilgrimage.<Link href='/'>Click Here to know more</Link>
                                </p>

                                <h2>Why Visit Shri Radha Raman Temple?</h2>
                                <p>
                                    A visit to Shri Radha Raman Temple is not just a spiritual journey but an immersion into the divine tales of
                                    Radha and Krishna. Its sacred aura and timeless devotion leave an indelible impression on every visitor.
                                </p>

                                <div className="text-center w-100">
                                    <Link
                                        href="https://maps.app.goo.gl/hhzHUwbPhDMtcwse6"
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

export default ShriRadhaRamanTemple;
