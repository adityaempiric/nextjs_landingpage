"use client"

import React, { useContext } from 'react'
import styles from './DarkModeToggle.module.css';
import day from '/public/contrast.png';
import night from '/public/moon.png';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const DarkModeToggle = () => {
 
  const {toggle,mode} = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toggle}>
       
            <Image src={day} width={12} height={12} className={styles.icon} />
            <Image src={night} width={12} height={12} className={styles.icon} />
            <div className={styles.ball} style={mode ==="light" ? {left:"3px"} : {right:"3px"}} /> 
    </div>
  )
}

export default DarkModeToggle