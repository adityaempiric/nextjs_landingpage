import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=1600"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Teller</h1>
          <h2 className={styles.imgDesc}>
            HandyCraft Award winning digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.items}>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            debitis asperiores temporibus veritatis odit illo labore repellendus
            corporis expedita blanditiis excepturi, commodi harum quisquam, quis
            id! Reiciendis sed iusto similique! Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            <br />
            <br />
            Esse ipsum, quod sint voluptate voluptatibus fuga. A nisi aspernatur
            nesciunt vero aperiam, facilis eum corporis. Tempore vitae repellat
            corporis omnis culpa. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Animi veniam harum assumenda doloribus, deleniti,
            esse aspernatur ut, fugit reprehenderit corrupti sint in. Ea beatae
            voluptatum doloribus dolorem eligendi adipisci possimus?
          </p>
        </div>
        <div className={styles.items}>
          <h1>What we do ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            debitis asperiores temporibus veritatis odit illo labore repellendus
            corporis expedita blanditiis excepturi, commodi harum quisquam, quis
            id! Reiciendis sed iusto similique! Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            <br />
            <br />
            Esse ipsum, quod sint voluptate voluptatibus fuga. A nisi aspernatur
            nesciunt vero aperiam, facilis eum corporis. 
          </p>
          <Button url='contact' text='Contacts' />
        </div>
      </div>
    </div>
  );
};

export default About;
