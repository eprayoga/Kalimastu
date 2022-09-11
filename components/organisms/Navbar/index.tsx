import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../public/assets/icon/logo_kalimastu.svg';
import {
  Bar,
  Nav,
  NavbarSection,
  NavbarToggle,
  NavBrand,
  NavMenu,
  NavSosmed,
} from './NavbarElements';
import NavItem from './NavIttem';

interface NavbarProps {
  activeMenu?: string;
}
export default function Navbar(props: NavbarProps) {
  const [navActive, setNavActive] = useState(false);
  const { activeMenu } = props;

  return (
    <NavbarSection active={navActive}>
      <Nav>
        <Link href="/" passHref>
          <NavBrand>
            <Image src={logo} objectFit="cover" />
          </NavBrand>
        </Link>
        <NavbarToggle onClick={() => setNavActive(!navActive)}>
          <Bar />
          <Bar />
          <Bar />
        </NavbarToggle>
      </Nav>
      <NavMenu>
        <NavItem href="/" title="Home" active={activeMenu === 'home'} />
        <NavItem href="/tim" title="Tim" active={activeMenu === 'tim'} />
        <NavItem
          href="/lokakarya"
          title="Lokakarya"
          active={activeMenu === 'lokakarya'}
        />
        <NavItem
          href="/produk"
          title="Produk"
          active={activeMenu === 'produk'}
        />
      </NavMenu>
      <NavSosmed>
        <a href="#">
          <img src="/assets/icon/ig_icon.svg" height="40px" alt="" />
        </a>
        <a href="#">
          <img src="/assets/icon/yt_icon.svg" height="40px" alt="" />
        </a>
      </NavSosmed>
    </NavbarSection>
  );
}
