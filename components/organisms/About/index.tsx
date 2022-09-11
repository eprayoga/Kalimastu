import Image from 'next/image';
import Link from 'next/link';
import GridImage from '../../../public/assets/img/kalimastu_grid.png';
import {
  AboutSection,
  AboutText,
  Amount,
  ButtonTeam,
  ButtonTim,
  Description,
  ImageContainer,
  Instagram,
  Member,
  NameOf,
  Number,
  SubTitle,
  Title,
} from './AboutElements';

export default function About() {
  return (
    <AboutSection>
      <ImageContainer className="desktop">
        <Image src={GridImage} width={775} />
      </ImageContainer>
      <AboutText>
        <SubTitle>KKN Kelompok 15 Tematik ITG 2022</SubTitle>
        <Title>
          Tim KALIMASTU
          <br />
          Institut Teknologi Garut
        </Title>
        <ImageContainer className="mobile">
          <Image src={GridImage} width={775} />
        </ImageContainer>
        <Description>
          Kalimastu adalah salah satu kelompok dari kegiatan KKN (Kuliah Kerja
          Nyata) Tematik 2022 Institut Teknologi Garut. Kalimastu sendiri adalah
          singkatan dari "KKN Limabelas Sindangratu".
          <br />
          Kalimastu beranggotakan Tunas-tunas muda yang bekerja sama membuat
          suatu program untuk mengembangkan beberapa bidang yang ada di Desa
          sindangratu dengan menerapkan perkembangan teknologi (EASNE) guna
          meningkatkan serta memutar roda perekonomian masyarakat.
        </Description>
        <Member>
          <Amount>
            <Number>20</Number>
            <NameOf>
              Jumlah
              <br />
              Anggota
            </NameOf>
          </Amount>
          <img src="/assets/icon/line.svg" alt="Garis" />
          <Amount>
            <Number>4</Number>
            <NameOf>
              Teknik
              <br />
              Industri
            </NameOf>
          </Amount>
          <Amount>
            <Number>7</Number>
            <NameOf>
              Teknik
              <br />
              Sipil
            </NameOf>
          </Amount>
          <Amount>
            <Number>9</Number>
            <NameOf>
              Teknik
              <br />
              Informatika
            </NameOf>
          </Amount>
        </Member>
        <ButtonTim>
          <Link href="/tim">
            <ButtonTeam>Lihat Anggota</ButtonTeam>
          </Link>
          <a href="https://www.instagram.com/kalimastu.itg" target="_blank">
            <Instagram src="/assets/icon/ig_icon.svg" />
          </a>
        </ButtonTim>
      </AboutText>
    </AboutSection>
  );
}
