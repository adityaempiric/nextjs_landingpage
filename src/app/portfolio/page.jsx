import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import illustration from "/public/illustration.png";
import electronics from "/public/websites.jpg";
import apps from "/public/apps.jpg";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shortTitle}>choose a gallery</div>
      <div className={styles.gallery}>
        <Link href="/portfolio/illustrations" className={styles.box}>
          <Image
            src={illustration}
            width={300}
            height={450}
            className={styles.img}
          />
          <h1 className={styles.text}>Illustrations</h1>
        </Link>
        <Link href="/portfolio/websites" className={styles.box}>
          <Image
            src={electronics}
            width={300}
            height={450}
            className={styles.img}
          />
          <h1 className={styles.text}>Websites</h1>
        </Link>
        <Link href="/portfolio/apps" className={styles.box}>
          <Image src={apps} width={300} height={450} className={styles.img} />
          <h1 className={styles.text}>Applications</h1>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
