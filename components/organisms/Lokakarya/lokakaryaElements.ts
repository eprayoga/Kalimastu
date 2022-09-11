import styled from 'styled-components';

export const Title = styled.div`
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

export const LokakaryaList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  margin: 40px 0px;
`;

export const LokakaryaSection = styled.section`
  width: 100%;
  margin-top: 120px;
  padding: 0 120px;
  text-align: center;

  @media screen and (max-width: 600px) {
    margin-top: 80px;
    padding: 0 20px;

    ${Title} {
      p {
        font-size: 12px;
      }
      h1 {
        font-weight: 700;
        font-size: 24px;
      }
    }

    ${LokakaryaList} {
      justify-content: center;
      margin: 20px 0px;
      gap: 20px;
    }
  }
`;
