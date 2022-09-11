import styled from 'styled-components';

export const LokakaryaPageHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 48px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    color: #ffd055;
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

export const LokakaryaPageSection = styled.section`
  margin-top: 100px;
  padding: 0 120px;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
    margin-top: 80px;

    ${LokakaryaPageHeader} {
      h1 {
        font-size: 32px;
      }

      p {
        font-size: 12px;
      }
    }

    ${LokakaryaList} {
      justify-content: center;
      margin: 20px 0px;
      gap: 20px;
    }
  }
`;
