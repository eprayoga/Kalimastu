import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/icon/logo_kalimastu.svg';
import {
  Brand,
  Copyright,
  FooterElement,
  FooterItem,
  FooterSection,
  Item,
  Title,
} from './FooterElements';

export default function Footer() {
  return (
    <FooterSection>
      <FooterElement>
        <Link href="/" passHref>
          <Brand>
            <Image src={logo} height={60} />
            <p>Kelompok 15</p>
            <h3>KKN Tematik ITG 2022</h3>
          </Brand>
        </Link>
        <FooterItem>
          <Title>Media Sosial</Title>
          <Item>Instagram : @kalimastu.itg</Item>
        </FooterItem>
        <FooterItem>
          <Title>Connect</Title>
          <Item>kalimastu.itg@gmail.com</Item>
          <Item>0812 8660 1597</Item>
          <Item>Institut Teknologi Garut</Item>
        </FooterItem>
      </FooterElement>
      <Copyright>&copy; 2022 Kalimastu ITG. All Right Reserved</Copyright>
    </FooterSection>
  );
}
