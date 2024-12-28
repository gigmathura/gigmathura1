import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Footer() {
  const router = useRouter();

  const handleNavigation = (section) => {
    if (router.pathname === '/') {
      // Delay scrolling until the component is mounted
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
      router.replace('/', undefined, { shallow: true });
    } else {
      router.push(`/?scrollTo=${section}`).then(() => {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 0);
      });
    }
  };

  // Handle scroll on initial load if URL has a `scrollTo` query parameter
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const scrollTo = params.get('scrollTo');
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        router.replace('/', undefined, { shallow: true });
      }
    }
  }, [router]);

  return (
    <div className={styles.footer}>
      <div className="w-100">
        <footer
          className="text-center text-lg-start text-white w-100"
          style={{ backgroundColor: "#f9f5f2" }}
        >
          <div className="p-3 pb-0">
            <section>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                <div className={`${styles.footerdesc} mb-2 mb-md-0 d-flex justify-content-start align-items-center flex-column`}>
                  <h5 className="text-uppercase text-dark">
                    About G<span style={{ color: "#fe8134" }}>I</span>G
                  </h5>
                  <p className="w-100 text-center text-dark" style={{ fontSize: "2.5vmin" }}>
                    GIG acts as your local rishtedar/companion, helping you plan
                    your darshan and managing it end-to-end. So, we possess
                    intimate knowledge of the city, from its famous street foods
                    to its rich cultural heritage. Join us for a seamless
                    pilgrimage experience.
                    <br />
                    <span style={{ color: "orange", fontSize: "4vmin" }}>Jai Siya Ram!</span>
                  </p>
                </div>

                <div className={`${styles.footerlinkcontainer} d-flex justify-content-center align-items-center flex-column text-dark`}>
                  <h5 style={{color:"#fe8134"}}>Useful Links</h5>
                  <a
                    className={`${styles.footerlink} my-0`}
                    onClick={() => handleNavigation('whyus')}
                  >
                    Why Us
                  </a>
                  <a
                    className={`${styles.footerlink} my-0`}
                    onClick={() => router.push('/about')}
                  >
                    About Us
                  </a>
                  <a
                    className={`${styles.footerlink} my-0`}
                    onClick={() => handleNavigation('packages')}
                  >
                    Packages Available
                  </a>
                  <a
                    className={`${styles.footerlink} my-0`}
                    onClick={() => handleNavigation('plannerdiv')}
                  >
                    Make Plans
                  </a>
                </div>
              </div>
            </section>

            <hr style={{ color: "black" }} />

            <section className="text-center w-100">
              <a
                className="btn btn-outline-light btn-floating m-1"
                style={{ border: "none" }}
                href="#!"
                role="button"
              >
                <i className="fa fa-facebook-f" style={{ fontSize: "36px", color: "blue" }}></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                style={{ border: "none" }}
                href="#!"
                role="button"
              >
                <i className="fa fa-whatsapp" style={{ fontSize: "36px", color: "green" }}></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                style={{ border: "none" }}
                href="#!"
                role="button"
              >
                <i className="fa fa-instagram" style={{ fontSize: "36px", color: "red" }}></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                style={{ border: "none" }}
                href="#!"
                role="button"
              >
                <i className="fa fa-envelope" style={{ fontSize: "36px", color: "grey" }}></i>
              </a>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}
