/* eslint-disable indent */
import styled from 'styled-components';

interface ButtonContainerTypes {
  btnOutline?: boolean;
  small?: boolean;
}
// eslint-disable-next-line import/prefer-default-export
export const ButtonContainer = styled.button<ButtonContainerTypes>`
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  border: ${(props) =>
    props.btnOutline ? '3px solid #FFD055' : '3px solid #FFD055'};
  border-width: ${(props) => (props.small ? '2px' : '')};
  background-color: ${(props) =>
    props.btnOutline ? 'transparent' : ' #FFD055'};
  color: ${(props) => (props.btnOutline ? '#FFD055' : '#000000')};
  border-radius: 10px;
  padding: ${(props) => (props.small ? '0.15rem 1.5rem' : '0.5rem 1.8rem')};
  font-size: ${(props) => (props.small ? '0,7rem' : '1.3rem')};
  font-weight: 600;
  transition: color 0.3s ease, background-color 0.3s ease;
  position: relative;

  &:hover {
    color: ${(props) => (props.btnOutline ? '#fff' : '#FFD055')};
    background-color: ${(props) =>
      props.btnOutline ? '#FFD055' : 'transparent'};
  }

  @media screen and (max-width: 600px) {
    font-size: ${(props) => (props.small ? '0.6rem' : '0.8rem')};
  }
`;
