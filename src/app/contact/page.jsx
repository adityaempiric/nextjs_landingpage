"use client"

import React, { useContext } from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import contactImg from '/public/contact.png'
import contactImg1 from '/public/contact1.png'
import Button from '@/components/Button/Button';
import { ThemeContext } from '@/context/ThemeContext';

const Contact = () => {

  const {toggle,mode} = useContext(ThemeContext)

  return (
    <div className={styles.container}>
        <div className={styles.title}>
          <h1>Let's Keep In Touch</h1>
        </div>
        <div className={styles.content}>
          <Image src={contactImg1} width={500} height={500} className={styles.img}  />
          <form className={styles.form}>
            <input type="text" placeholder='Name' className={mode === "dark" ? styles.input :styles.darkInput} />
            <input type="text" placeholder='Email' className={mode === "dark" ? styles.input :styles.darkInput} />
            <textarea rows="10" cols="30" placeholder='message' className={mode === "dark" ? styles.textarea :styles.darkTextarea}></textarea>
            <Button url="#" text="Send" />
          </form>
        </div>
    </div>
  )
}

export default Contact