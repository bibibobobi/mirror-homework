import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bibo Homework</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>Hello</h1>
        <Link href='/qa'>
          <a>Go to QA Section &rarr;</a>
        </Link>
      </main>
    </div>
  );
}
