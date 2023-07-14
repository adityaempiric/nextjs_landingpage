"use client";
import React, { useState } from "react";
import styles from "../../page.module.css";
import eventvideo from "../../../../../public/tournament.mp4";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { BsCalendar2Event } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import Calender from "@/components/Calender/Calender";

import { Country, State, City } from "country-state-city";
// import { ICountry, IState, ICity } from "country-state-city";
import Location from "@/components/Location/Location";

const page = () => {
  const countryData = Country.getAllCountries();

  const [country, setCountry] = useState([]);

  const [locValue, setLocValue] = useState()

  const [dis, setDis] = useState("none");
  const [locdis, setLocDis] = useState("none");

  const handledateClick = () => {
    if (dis === "none") {
      setDis("block");
    } else {
      setDis("none");
    }
  };
  const handlelocClick = () => {
    if (locdis === "none") {
      setLocDis("block");
    } else {
      setLocDis("none");
    }
  };

  const handlecountryData = (e) => {
    setLocValue(e.target.value)
    console.log(
      countryData.filter((item) =>
        item.name.toLowerCase().match(e.target.value.toLowerCase())
      )
    );
    const countryDetail = countryData.filter((item) =>
      item.name.toLowerCase().match(e.target.value.toLowerCase())
    );
    setCountry(countryDetail);
  };

  return (
    <>
      <div className={styles.eventBooking}>
        <div className={styles.eventlocation} onClick={handlelocClick}>
          <FiSearch />
          <input
            type="text"
            placeholder="Location"
            className={styles.eventInput}
            onChange={handlecountryData}
            value={locValue}
          />
        </div>
        <div className={styles.eventPrices} onClick={handledateClick}>
          <SlCalender style={{ fontSize: "30px" }} />
          <input
            type="text"
            placeholder="Date"
            className={styles.calendarInput}
          />
        </div>

        <div className={styles.eventPrices}>
          <BsCalendar2Event style={{ fontSize: "30px" }} />
          <span>As</span>
        </div>
        <div className={styles.eventBtn}>
          <button type="submit" className={styles.eventSearchBtn}>
            Search
          </button>
        </div>
      </div>
      <Location country={country} locdis={locdis} setLocValue={setLocValue} />
      <Calender dis={dis} />

      <div className={styles.eventContainer}>
        <div className={styles.eventWrite}>
          <h2 className={styles.eventTitle}>EXPERIENCE MORE</h2>
          <p className={styles.eventText}>
            The cheapest tickets on
            <br />
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
      <div className={styles.eventVideo}></div>
      <video controls autoPlay={true} muted loop fill={true}>
        <source src={eventvideo} type="video/mp4" />
        Your browser does not support the video tag or the video codec.
      </video>
    </>
  );
};

export default page;
