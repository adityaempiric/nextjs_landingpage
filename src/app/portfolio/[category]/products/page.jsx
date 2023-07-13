"use client";
import React, { useContext } from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const data = [
  {
    img: "/uncharte4game.png",
  },
  {
    img: "/assassins.png",
  },
  {
    img: "/godofwar.png",
  },
  {
    img: "/daysgone.png",
  },
  {
    img: "/callofduty.png",
  },
  {
    img: "/fifa15.jpg",
  },
  {
    img: "/display.png",
  },
  {
    img: "/controller2.png",
  },
  {
    img: "/dualcontroller.png",
  },
  {
    img: "/headset.png",
  },
  {
    img: "/fifa15.jpg",
  },
  {
    img: "/fifa15.jpg",
  },
  {
    img: "/fifa15.jpg",
  },
  {
    img: "/fifa15.jpg",
  },
  {
    img: "/fifa15.jpg",
  },
  {
    img: "/fifa15.jpg",
  },
];

const page = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <>
      <h1 className={mode =="dark"?styles.title:styles.darkTitle}>Our Products</h1>
      <div className={styles.prodContainer}>
        {data.map((res) => {
          return (
            <div>
              <div className={styles.mainBox}>
                <Image
                  src={res.img}
                  width={250}
                  height={250}
                  className={styles.prodImg}
                />
              </div>
              <button
                type="submit"
                className={
                  mode === "dark" ? styles.prodBtn : styles.prodBtnDark
                }
              >
                ADD PRODUCT
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
