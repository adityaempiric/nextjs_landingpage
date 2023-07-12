import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import illustration from "/public/illustration.png";

async function getData() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if(!res.ok){
    throw new Error('Failed to get data')
  }

  return res.json()

}

async function getImages() {
  const res2 = await fetch("https://jsonplaceholder.typicode.com/photos")

  if(!res2.ok){
    throw new Error('Failed to get data')
  }

  return res2.json()
}



const Blog = async () => {

  const data = await getData()
  const imgData = await getImages()

  return (
    <div className={styles.mainContainer}>
      {data.map((item, index)=>{
        return(
          <Link href="/blog/testblog" className={styles.mainBox}>
          
              <Image
              src={imgData[index].thumbnailUrl}
              width={300}
              height={300}
              className={styles.img}
            />
           
               
          <div className={styles.textContainer}>    
            <h1 className={styles.text}>{item.title}</h1>
            <p className={styles.text}>{item.body}</p>
          </div>
        </Link>
        )
      })}
    
    </div>
  )
}

export default Blog