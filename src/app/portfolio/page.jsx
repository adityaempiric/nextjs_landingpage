import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import illustration from "/public/illustration.png";
import spiderman from "/public/spiderman.jpg";
// import electronics from "/public/websites.jpg";
import electronics from "/public/controller2.png";
import apps from "/public/Esports.jpg";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shortTitle}>choose a gallery</div>
      <div className={styles.gallery}>
        <Link href="/portfolio/games" className={styles.box}>
          <Image
            src={spiderman}
            width={300}
            height={450}
            className={styles.img}
          />
          <h1 className={styles.text}>Games</h1>
        </Link>
        <Link href="/portfolio/gadgets" className={styles.box}>
          <Image
            src={electronics}
            width={300}
            height={450}
            className={styles.img}
          />
          <h1 className={styles.text}>Gadgets</h1>
        </Link>
        <Link href="/portfolio/events" className={styles.box}>
          <Image src={apps} width={300} height={450} className={styles.img} />
          <h1 className={styles.text}>Esports</h1>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
