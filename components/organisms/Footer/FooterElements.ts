import styled from 'styled-components';

export const FooterElement = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Brand = styled.div`
  cursor: pointer;

  p {
    font-weight: 400;
    font-size: 24px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const FooterItem = styled.div``;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const Item = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-top: 4px;
`;

export const Copyright = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin: 40px 0;
`;

export const FooterSection = styled.footer`
  width: 100%;
  margin-top: 120px;
  padding: 0 120px;

  @media screen and (max-width: 600px) {
    margin-top: 100px;
    padding: 0 20px;

    ${Title}, ${Item} {
      font-size: 16px;
    }

    ${Copyright} {
      font-size: 14px;
      margin: 20px 0;
    }
  }
`;
