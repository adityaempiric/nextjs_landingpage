import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'

export default function Home() {
  return (
    <div class={styles.container}>

      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your idea into Reality. We bring together the teams from the global tech industry. </p>
        <button type="submit" className={styles.btn}>See Our Works</button>
      </div>

      <div className={styles.item}>
      <Image src={hero} alt="Home Image" className={styles.img}/>
      </div>

    </div>
  )
}
