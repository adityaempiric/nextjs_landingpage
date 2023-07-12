import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'
import controller from 'public/controller1.png'
import controller2 from 'public/controller2.png'
import controller3 from 'public/controller3.png'
import controller4 from 'public/controller4.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div class={styles.container}>

      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your idea into Reality. We bring together the teams from the global tech industry. </p>
        <Button url='/portfolio' text='See More' />
      </div>

      <div className={styles.item}>
      <Image src={controller3} alt="Home Image" className={styles.img}/>
      </div>

    </div>
  )
}
