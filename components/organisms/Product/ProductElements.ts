import styled from 'styled-components';

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

export const ProductList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin: 40px 0px;
`;

export const ProductSection = styled.section`
  margin: 120px 0;
  padding: 0 120px;

  @media screen and (max-width: 600px) {
    margin: 80px 0;
    padding: 0 20px;

    ${ProductHeader} {
      flex-direction: column;
    }

    ${Title} {
      text-align: center;
      margin-bottom: 10px;

      p {
        font-size: 12px;
      }
      h1 {
        font-weight: 700;
        font-size: 26px;
      }
    }

    ${ProductList} {
      margin: 20px 0px;
    }
  }
`;
