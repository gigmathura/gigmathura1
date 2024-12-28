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
        <title>GIG Ayodhya</title>
        <meta name="description" content="Ayodhya Destination Management Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Allblogs allBlog={allBlog}/>
        <Prepackage/>
        <Whyus/>
        <div className={`mt-3 ${styles.rediv}`}>
          <Review/>
          <Enquiry/>
        </div>
      </div>
      <Footer/>
    </>
  );
}


