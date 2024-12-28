import Image from 'next/image';
import styles from '../styles/Card.module.css'; // Assuming you have styles defined in Card.module.css

export default function Blogcard({ title, images , link}) {
  // Function to format the title into a readable URL slug
  const formattedTitle = title.trim().toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={styles.cardContainer}>
      <a 
        // href={`/blogs/${formattedTitle}`} 
        href={link}
        target="_blank" 
        rel="noopener noreferrer" // To prevent security issues when opening in a new tab
        className={`${styles.blogCard} d-flex justify-content-center align-items-center flex-column m-2`}
      >
        <div className={styles.blogImgDiv}>
          <Image
            className="d-block w-100 h-100"
            src={images} // Display the first image in the array
            alt={title}
            layout="responsive"
            width={300}  // Adjust the width based on your design needs
            height={200} // Adjust the height based on your design needs
          />
        </div>
        <p className={styles.blogimgtext}>{title}</p>
      </a>
    </div>
  );
}
