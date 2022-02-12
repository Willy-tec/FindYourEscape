import type { NextPage, GetServerSideProps  } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {prisma} from '../lib/prisma'
import { Post } from '../component/Post'
type props = {
  feed : Post
}
const StartPage: NextPage<props> = () => {
  // console.log(props.feed)
  return (
    <div className={styles.container}>
      <Head>
        <title>Find Your Escape</title>
        <meta name="description" content="Application pour trouver des escapes games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Find Your Escape</h1>
        <Link href="/home">Accueil</Link>
        <Link href="/login">Login</Link>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps  = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return { props: { feed } };
// };

export default StartPage
