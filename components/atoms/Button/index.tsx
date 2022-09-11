import React from 'react';
import { ButtonContainer } from './ButtonElements';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  small?: boolean;
  btnOutline?: boolean;
}
const Button = (props: ButtonProps) => {
  const { children, onClick, small, btnOutline } = props;

  return (
    <ButtonContainer onClick={onClick} small={small} btnOutline={btnOutline}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
