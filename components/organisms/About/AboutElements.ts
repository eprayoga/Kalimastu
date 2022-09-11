import styled from 'styled-components';

export const AboutText = styled.div`
  .mobile {
    display: none;
  }
`;

export const ImageContainer = styled.div``;

export const SubTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #ffd055;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Description = styled.div`
  max-width: 500px;
  font-weight: 400;
  font-size: 14px;
  color: #8e8e8e;
  margin: 20px 0;
`;

export const Member = styled.div`
  display: flex;
  gap: 30px;
`;

export const Amount = styled.div``;

export const Number = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

export const NameOf = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #8e8e8e;
`;

export const ButtonTeam = styled.div`
  margin-top: 20px;
  padding: 10px 25px;
  background-color: #ffd055;
  font-size: 16px;
  font-weight: 700;
  width: fit-content;
  border-radius: 10px;
`;

export const ButtonTim = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Instagram = styled.img`
  height: 40px;
  margin-top: 20px;
`;

export const AboutSection = styled.section`
  padding: 0 120px;
  display: flex;
  gap: 40px;
  align-items: center;
  margin-top: 170px;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
    flex-direction: column;
    margin-top: 60px;

    ${ImageContainer} {
      display: none;
    }

    ${AboutText} {
      .mobile {
        display: block;
        margin-top: 10px;
      }
    }

    ${SubTitle} {
      font-size: 10px;
    }

    ${Title} {
      font-size: 24px;
    }

    ${Member} {
      gap: 20px;
    }

    ${Number} {
      font-size: 40px;
    }

    ${NameOf} {
      font-size: 12px;
    }
  }
`;
