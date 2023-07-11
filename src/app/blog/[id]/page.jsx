import React from "react";
import styles from "../page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.firstModule}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            aliquid in nesciunt vitae fugit et quibusdam ipsa incidunt nobis
            illo! Autem alias accusantium mollitia magni ut qui sed eos illo?
          </p>
          <div className={styles.profile}>
            <Image
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
              width={80}
              height={80}
              className={styles.profileImg}
            />
            <h2 className={styles.profileText}>John Smith</h2>
          </div>
        </div>
        <div className={styles.secondModule}>
          <Image
            src="https://images.pexels.com/photos/17192523/pexels-photo-17192523/free-photo-of-light-city-road-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          odio quibusdam iure corporis laudantium qui a facere, consectetur
          error, reprehenderit magni atque iusto dolorum, sapiente odit ipsam
          dolore officiis. At? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Consequatur rem praesentium non porro, itaque
          doloribus nam debitis asperiores. Ut ipsum corrupti aperiam impedit
          similique molestiae quisquam, ullam soluta officiis debitis? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsam culpa ut
          sequi recusandae dolores fuga optio quam, ad perferendis omnis
          reiciendis eius ipsa corrupti. Similique natus earum pariatur facilis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          odio quibusdam iure corporis laudantium qui a facere, consectetur
          error, reprehenderit magni atque iusto dolorum, sapiente odit ipsam
          dolore officiis. At? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Consequatur rem praesentium non porro, itaque
          doloribus nam debitis asperiores. Ut ipsum corrupti aperiam impedit
          similique molestiae quisquam, ullam soluta officiis debitis? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsam culpa ut
          sequi recusandae dolores fuga optio quam, ad perferendis omnis
          reiciendis eius ipsa corrupti. Similique natus earum pariatur facilis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          odio quibusdam iure corporis laudantium qui a facere, consectetur
          error, reprehenderit magni atque iusto dolorum, sapiente odit ipsam
          dolore officiis. At? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Consequatur rem praesentium non porro, itaque
          doloribus nam debitis asperiores. Ut ipsum corrupti aperiam impedit
          similique molestiae quisquam, ullam soluta officiis debitis? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsam culpa ut
          sequi recusandae dolores fuga optio quam, ad perferendis omnis
          reiciendis eius ipsa corrupti. Similique natus earum pariatur facilis!
        </p>
        
      </div>
    </div>
  );
};

export default BlogPost;
