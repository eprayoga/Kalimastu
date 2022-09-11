import Head from 'next/head';
import Footer from '../components/organisms/Footer';
import TimPage from '../components/organisms/TimPage';
import Navbar from '../components/organisms/Navbar';

const tim = () => {
  return (
    <>
      <Head>
        <title>Tim Kalimastu ITG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar activeMenu="tim" />
      <TimPage />
      <Footer />
    </>
  );
};

export default tim;