import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import contactImg from '/public/contact.png'
import Button from '@/components/Button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          <h1>Let's Keep In Touch</h1>
        </div>
        <div className={styles.content}>
          <Image src={contactImg} width={500} height={500} className={styles.img}  />
          <form className={styles.form}>
            <input type="text" placeholder='Name' className={styles.input} />
            <input type="text" placeholder='Email' className={styles.input} />
            <textarea rows="10" cols="30" placeholder='message' className={styles.textarea}></textarea>
            <Button url="#" text="Send" />
          </form>
        </div>
    </div>
  )
}

export default Contact