import styled from 'styled-components';

export const ProductImageContainer = styled.div`
  width: 270px;
  height: 270px;
  overflow: hidden;
  border-radius: 20px;

  img {
    object-fit: cover;
  }
`;

export const ProductName = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-align: left;
  margin-top: 10px;
`;

export const ProductBy = styled.div`
  font-weight: 400;
  font-size: 10px;
  color: #8e8e8e;
  margin-top: 3px;
  margin-bottom: 10px;
`;

export const Price = styled.h1`
  font-weight: 700;
  font-size: 24px;
`;

export const ProductList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  margin: 40px 0px;
`;

export const ProductCardContainer = styled.div`
  width: 320px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 25px;

  @media screen and (max-width: 600px) {
    width: 150px;
    padding: 15px;
    border-radius: 15px;

    ${ProductImageContainer} {
      width: 120px;
      height: 120px;
      border-radius: 15px;
    }

    ${ProductName} {
      font-size: 10px;
    }

    ${ProductBy} {
      font-size: 8px;
    }

    ${Price} {
      font-size: 10px;
    }
  }
`;
