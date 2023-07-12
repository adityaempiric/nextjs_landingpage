"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const data = [
  {
    category: "games",
    items: [
      {
        title: "Call of Duty",
        desc: "Description of Illustration 1",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1600",
        video: "/CallofDuty.mp4",
      },
      {
        title: "FIFA18",
        desc: "Description of Illustration 2",
        img: "https://images.pexels.com/photos/14236992/pexels-photo-14236992.jpeg?auto=compress&cs=tinysrgb&w=1600",
        video: "/FIFA18.mp4",
      },
      {
        title: "SpiderMan",
        desc: "Description of Illustration 3",
        img: "https://images.pexels.com/photos/1309326/pexels-photo-1309326.jpeg?auto=compress&cs=tinysrgb&w=1600",
        video: "/spiderman.mp4",
      },
    ],
  },
  {
    category: "gadgets",
    items: [
      {
        title: "Bluetooth Controller",
        desc: "Description of Website 1",
        img: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1600",
        video: "/Duals.mp4",

      },
      {
        title: "High Performing Headset",
        desc: "Description of Website 2",
        img: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1600",
        video: "/headset.mp4",
      },
      {
        title: "Multi Functional Console",
        desc: "Description of Website 3",
        img: "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1600",
        video: "/PS5.mp4",
      },
    ],
  },
  {
    category: "events",
    items: [
      {
        title: "Asian ESports Competition Japan",
        desc: "Description of App 1",
        img: "https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&w=1600",
        video: "/esports.mp4",
      },
      {
        title: "App 2",
        desc: "Description of App 2",
        img: "https://images.pexels.com/photos/218686/pexels-photo-218686.jpeg?auto=compress&cs=tinysrgb&w=1600",
        video: "/PS5.mp4",
      },
      {
        title: "App 3",
        desc: "Description of App 3",
        img: "https://images.pexels.com/photos/4526429/pexels-photo-4526429.jpeg?auto=compress&cs=tinysrgb&w=1600",
        video: "/PS5.mp4",
      },
    ],
  },
];

const Category = ({ params }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    console.log("-----playing on",isPlaying)
    setIsPlaying(()=> true);
  };

  const handleMouseLeave = () => {
    console.log("-------playing off",isPlaying)
    setIsPlaying(()=> false);
  };

  const categoryData = data.find((item) => item.category === params.category);

  if (!categoryData) {
    return <div>No data available for this category</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.cardTitle}>{params.category}</h1>
      {categoryData.items.map((item) => (
        <div key={item.title} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.textTitle}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url={`/portfolio/${params.category}/products`} text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <video
              controls
              autoPlay={true}
              muted
              loop
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              width="750"
              height="500"
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag or the video codec.
            </video>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
