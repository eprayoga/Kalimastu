import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const ProductContentSection = styled.section`
  padding: 0 20px;
  margin-bottom: 100px;
`;

const ArrowBack = styled.img`
  margin: 20px 0;
  width: 30px;
`;

const ImageContainer = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vw - 40px);
  border-radius: 20px;
  overflow: hidden;
`;

const ProductName = styled.h1`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const ProductBy = styled.p`
  color: #8e8e8e;
`;

const Deskripsi = styled.div`
  margin: 20px 0;
`;

const AttentionContainer = styled.div`
  padding: 20px;
  position: fixed;
  bottom: 0;

  h6 {
    text-align: center;
    padding: 10px 20px;
    width: 100%;
    border-radius: 30px;
    background-color: #ffd055;

    span {
      font-weight: 700;
    }
  }
`;

const produk = () => {
  return (
    <>
      <Head>
        <title>Ajew Takoyaki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductContentSection>
        <Link href="/produk" passHref>
          <ArrowBack src="/assets/icon/arrow_left.svg" alt="" />
        </Link>

        <ImageContainer>
          <Image
            src="/assets/img/ajew_takoyaki.jpg"
            width={1080}
            height={1080}
          />
        </ImageContainer>
        <ProductName>Takoyaki</ProductName>
        <ProductBy>by Ajew Takoyaki</ProductBy>
        <Deskripsi>
          <h1>Deskripsi</h1>
          <p>Makanan khas jepang dengan cita rasa orang indonesia</p>
        </Deskripsi>
      </ProductContentSection>
      <AttentionContainer>
        <h6>
          Produk ini bisa didapatkan di stand bazar
          <span> KALIMASTU ITG</span>
        </h6>
      </AttentionContainer>
    </>
  );
};

export default produk;
