import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import Jumbotron from '../components/organisms/Jumbotron';
import About from '../components/organisms/About';
import Lokakarya from '../components/organisms/Lokakarya';
import Product from '../components/organisms/Product';
import Saran from '../components/organisms/Saran';
import Footer from '../components/organisms/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Kalimastu ITG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar activeMenu="home" />
      <Jumbotron />
      <About />
      <Lokakarya />
      <Product />
      <Saran />
      <Footer />
      {/* <h1>Kalimastu ITG</h1> */}
    </>
  );
};

export default Home;
