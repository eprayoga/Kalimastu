/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const NavBrand = styled.div`
  cursor: pointer;
  width: 200px;

  img {
    object-fit: cover;
  }
`;

export const NavbarToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  cursor: pointer;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Bar = styled.div`
  display: none;
  width: 25px;
  height: 3px;
  margin: 2.5px 0;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  &:nth-child(1) {
    width: 20px;
  }
  &:nth-child(2) {
    width: 18px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 40px;
`;

interface NavItemElementProps {
  isActive?: boolean;
}
export const NavItemElement = styled.li<NavItemElementProps>`
  margin: 0 20px;
  position: relative;
  list-style: none;

  a {
    font-size: 18px;
    text-decoration: none;
    color: ${(props) => (props.isActive ? '#FFD055' : '#fff')};

    :hover {
      color: #ffd055;
    }
  }
`;

export const NavSosmed = styled.div`
  display: flex;
  gap: 20px;
`;

interface NavbarSectionTypes {
  active?: boolean;
}
export const NavbarSection = styled.section<NavbarSectionTypes>`
  width: 100%;
  height: 100px;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #181622;
  position: fixed;
  z-index: 2;
  top: 0;

  @media screen and (max-width: 600px) {
    padding: 20px;
    height: 80px;

    ${NavBrand} {
      width: 120px;
    }

    ${Nav} {
      width: 100%;
    }

    ${Bar} {
      display: block;

      ${(props) =>
        props.active &&
        css`
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(1) {
            width: 25px;
            transform: translateY(8px) rotate(45deg);
          }
          &:nth-child(3) {
            width: 25px;
            transform: translateY(-8px) rotate(-45deg);
          }
        `}
    }

    ${NavMenu} {
      left: ${(props) => (props.active ? '0' : '100%')};
      width: 100%;
      height: calc(100vh - 80px);
      position: absolute;
      flex-direction: column;
      background-color: #181622;
      z-index: 9;
      top: 80px;
      align-items: center;
      padding: 0 20px;
      transition: all ease-in 0.3s;
    }

    ${NavSosmed} {
      display: none;
    }
  }
`;
