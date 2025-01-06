import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar.js";
import Allblogs from "../components/Allblogs.js";
import Footer from "../components/Footer.js";
import Prepackage from "../components/PrePackage.js";
import Whyus from "../components/Whyus.js";
import Review from "../components/Review.js";
import Enquiry from "../components/Enquiry.js";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home({ allBlog }) {
  return (
    <>
      <Head>
        <title>Gigdarshan - Your All-in-One Mathura Travel Planner</title>
        <meta
          name="description"
          content="Plan your Mathura darshan with GigDarshan. Plan your entire Mathura journey effortlessly with our PlanBot. Explore hotels, rental cars, activities, packages, and more."
        />
        <meta
          name="keywords"
          content="Mathura travel, plan Mathura darshan, Mathura packages, Mathura hotels, Mathura rental cars, Mathura tourism, PlanBot for darshan"
        />
        <meta
          property="og:title"
          content="Gigdarshan - Plan Your Mathura Darshan with Ease"
        />
        <meta
          property="og:description"
          content="Let PlanBot handle your Mathura darshan planning. Get the best deals on hotels, rental cars, activities, and personalized travel packages."
        />
        <meta
          property="og:image"
          content="/logo.png"
        /> {/* Replace with your feature image URL */}
        <meta
          property="og:url"
          content="https://www.gigdarshan.com/"
        />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://www.gigdarshan.com" />
      </Head>

      <Navbar />

      <div
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Allblogs allBlog={allBlog} />
        <Prepackage />
        <Whyus />
        <div className={`mt-3 ${styles.rediv}`}>
          <Review />
          <Enquiry />
        </div>
      </div>
      <Footer />
    </>
  );
}


