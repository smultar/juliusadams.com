import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
 return (
  <main className={styles.main}>
   <div className={styles.center}>
    <Image
     className={styles.logo}
     src='/construction.svg'
     alt='Next.js Logo'
     width={180}
     height={37}
     priority
    />
    <h1 className={styles.title}>Under Construction</h1>
   </div>
  </main>
 );
}
