import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import styles from '../styles/Home.module.css';

const Title = styled.h1``;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>
      </main>
    </div>
  );
};

export default Home;
