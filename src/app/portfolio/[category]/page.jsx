"use client";
import React from "react";
import styles from "../page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const data = [
  {
    category: 'illustrations',
    items: [
      {
        title: 'Illustration 1',
        desc: 'Description of Illustration 1',
        img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Illustration 2',
        desc: 'Description of Illustration 2',
        img: 'https://images.pexels.com/photos/14236992/pexels-photo-14236992.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Illustration 3',
        desc: 'Description of Illustration 3',
        img: 'https://images.pexels.com/photos/1309326/pexels-photo-1309326.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
  },
  {
    category: 'websites',
    items: [
      {
        title: 'Website 1',
        desc: 'Description of Website 1',
        img: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Website 2',
        desc: 'Description of Website 2',
        img: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'Website 3',
        desc: 'Description of Website 3',
        img: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
  },
  {
    category: 'apps',
    items: [
      {
        title: 'App 1',
        desc: 'Description of App 1',
        img: 'https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'App 2',
        desc: 'Description of App 2',
        img: 'https://images.pexels.com/photos/218686/pexels-photo-218686.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        title: 'App 3',
        desc: 'Description of App 3',
        img: 'https://images.pexels.com/photos/4526429/pexels-photo-4526429.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ],
  },
];



const Category = ({ params }) => {

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
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={item.img}
            width={500}
            height={500}
          />
        </div>
      </div>
    ))}
  </div>
  );
};

export default Category;
