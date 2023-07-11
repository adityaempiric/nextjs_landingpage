import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import illustration from "/public/illustration.png";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
         <Link href="/blog/testblog" className={styles.mainBox}>
          <Image
            src={illustration}
            width={300}
            height={300}
            className={styles.img}
          />
          <div className={styles.textContainer}>    
            <h1 className={styles.text}>Title</h1>
            <p className={styles.text}>Desc</p>
          </div>
        </Link>
         <Link href="/blog/testblog" className={styles.mainBox}>
          <Image
            src={illustration}
            width={300}
            height={300}
            className={styles.img}
          />
         <div className={styles.textContainer}>    
            <h1 className={styles.text}>Title</h1>
            <p className={styles.text}>Desc</p>
          </div>
        </Link>
         <Link href="/blog/testblog" className={styles.mainBox}>
          <Image
            src={illustration}
            width={300}
            height={300}
            className={styles.img}
          />
        <div className={styles.textContainer}>    
            <h1 className={styles.text}>Title</h1>
            <p className={styles.text}>Desc</p>
          </div>
        </Link>
    </div>
  )
}

export default Blog