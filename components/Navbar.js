import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false); // Track if user is scrolling

  // Detect scroll behavior to hide/show navbar
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (!scrolling) {
        setScrolling(true);
      }

      // Reset the scroll timeout after the user stops scrolling
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolling(false);
      }, 150); // 150ms after scroll stops
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);
  // Determine the active class for dynamic links
  const getActiveClass = (path) => (router.pathname === path ? styles.active : styles.inactive);

  // Determine active state for Blogs and Packages
  const isBlogsActive = () => (router.asPath.includes('blogs') ? styles.active : styles.inactive);
  const isPackagesActive = () => (router.asPath.includes('ayodhyapackages') ? styles.active : styles.inactive);

  // Scroll to specific section when on the home page (Client-side only)
  const scrollToSection = (id) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handle navigation and scrolling for Packages and Why Us
  const handleNavigation = (section) => {
    if (router.pathname === '/') {
      // Scroll to the specific section on the home page
      scrollToSection(section);

      // Clean the URL by replacing with "/"
      router.replace('/', undefined, { shallow: true });
    } else {
      // Navigate to the home page and include the scrollTo query
      router.push(`/?scrollTo=${section}`).then(() => {
        // Scroll after navigation and clean the URL
        scrollToSection(section);
        router.replace('/', undefined, { shallow: true });
      });
    }
  };

  // Handle scrolling based on query parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { scrollTo } = router.query;
      if (scrollTo) {
        scrollToSection(scrollTo);
      }
    }
  }, [router.query]);
  return (
    <nav className={styles.navbar}>
      {/* Desktop Navigation */}
      <div className={styles.logomobile}>
        <Link href="/">
          <Image src="/logo.png" alt="GIG" layout="intrinsic" height={60} width={71} />
        </Link>
      </div>
      <div className={styles.desktopNav}>
        <div className={styles.links}>
          {/* Blogs */}
          <Link href="/blogs" >
            <div className={isBlogsActive()}>Explore</div>
          </Link>
          {/* Packages */}
          <div
            className={isPackagesActive()}
            onClick={() => handleNavigation('packages')}
          >
            Packages
          </div>
          {/* Why Us */}
          <div
            className={styles.inactive}
            onClick={() => handleNavigation('whyus')}
          >
            Why Us
          </div>
        </div>
        <Link href="/">
          <img src="/logo.png" alt="GIG" className={styles.logo} />
        </Link>
        <div className={styles.links}>
          {/* Home */}
          <Link href="/" legacyBehavior>
            <div className={getActiveClass('/')}>Home</div>
          </Link>
          {/* My Trips */}
          <Link href="/planbot" legacyBehavior>
            <div className={getActiveClass('/planbot')}>Shravan-PlanBot</div>
          </Link>
          {/* Account */}
       
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${scrolling ? styles.hidden : ''}`}>
        <Link href="/" legacyBehavior>
          <div className={getActiveClass('/')}>
            <i className="fa fa-home"></i> Home
          </div>
        </Link>
        <Link href="/planbot" legacyBehavior>
          <div className={getActiveClass('/planbot')}>
            <i className="fa fa-user"></i> Planbot
          </div>
        </Link>
        <Link href="/blogs" legacyBehavior>
          <div className={getActiveClass('/blogs')}>
            <i className="fa fa-globe"></i> Explore
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
