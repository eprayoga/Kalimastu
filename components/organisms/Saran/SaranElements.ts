import styled from 'styled-components';

export const SaranIllustrator = styled.div``;

export const SaranContent = styled.div`
  button {
    margin-top: 10px;
  }
`;

export const ContentTitle = styled.div`
  margin-bottom: 23px;

  p {
    font-size: 20px;
    font-weight: 700;
    color: #ffd055;
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
  }
`;

export const FormInput = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #ffffff;
  width: 100%;
  color: #ffd055;
  font-size: 24px;
  outline: none;
  margin-top: 10px;
`;

export const TextArea = styled.textarea`
  font-family: 'Montserrat', sans-serif;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #ffffff;
  width: 100%;
  color: #ffd055;
  font-size: 24px;
  outline: none;
  resize: none;
`;

export const SaranSection = styled.section`
  padding: 0 120px;
  display: flex;
  align-items: center;
  gap: 80px;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
    flex-direction: column;
    gap: 20px;

    ${ContentTitle} {
      p {
        font-size: 12px;
      }
      h1 {
        font-size: 30px;
      }
    }

    ${Label} {
      font-size: 20px;
    }

    ${Input} {
      font-size: 18px;
      margin-top: 5px;
    }
  }
`;
