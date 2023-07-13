"use client";
import React, { useState } from "react";
import styles from "../../page.module.css";
import eventvideo from "../../../../../public/tournament.mp4";
import Image from "next/image";
import { FiSearch } from 'react-icons/fi';
import { BsCalendar2Event } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import Calender from "@/components/Calender/Calender";




const page = () => {
  const [dis, setDis] = useState('none')

  const handledateClick = () =>{
    console.log("inside click",dis)
    if (dis ==='none'){
      setDis('block')
    }
    else{
      setDis('none')
    }
  }
  
  return (
    <>
      <div className={styles.eventBooking}>
        <div className={styles.eventlocation}>
          <FiSearch/>
          <input type="text" placeholder="Location" className={styles.eventInput} />
        </div>
        <div className={styles.eventPrices} onClick={handledateClick}>
          <SlCalender style={{fontSize:"30px"}}/>
          <input type="text" placeholder="Date" className={styles.calendarInput} />
        </div>
       
        <div className={styles.eventPrices}>
          <BsCalendar2Event style={{fontSize:"30px"}}/>
          <span>As</span>
        </div>
        <div className={styles.eventBtn}>
          <button type="submit" className={styles.eventSearchBtn}>Search</button>
        </div>
       
      </div>
      <Calender dis={dis} />
      
      <div className={styles.eventContainer}>
        <div className={styles.eventWrite}>
          <h2 className={styles.eventTitle}>EXPERIENCE MORE</h2>
          <p className={styles.eventText}>
            The cheapest tickets on 
            <br/>
            the internet, period.
          </p>
          <p className={styles.eventDesc}>
            Zero hidden service fees, price match guarantee, group discounts and
            more. Because it should be this easy.
          </p>
        </div>
        <div className={styles.eventImage}>
          <Image src="" />
        </div>
      </div>
        <div className={styles.eventVideo}>
      </div>
        <video
              controls
              autoPlay={true}
              muted
              loop
             fill={true}
            >
              <source src={eventvideo}type="video/mp4" />
              Your browser does not support the video tag or the video codec.
            </video>
    </>
  );
};

export default page;
