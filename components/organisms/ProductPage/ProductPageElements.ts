import styled from 'styled-components';

export const ProductPageHeader = styled.div`
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

export const Category = styled.div``;

export const CategoryHeader = styled.h1`
  font-weight: 700;
  font-size: 36px;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const CategoryItem = styled.div`
  width: 170px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.3s;

  img {
    width: 100px;
  }

  :hover {
    background: rgba(255, 208, 85, 0.1);
  }
`;

export const CategoryName = styled.h3`
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
`;

export const AllProduct = styled.div`
  margin: 40px 0;
  margin-bottom: 80px;
`;

export const AllProductHeader = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

export const AllProductList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin: 40px 0px;
`;

export const ProductPageSection = styled.section`
  margin-top: 100px;
  padding: 0 120px;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
    margin-top: 80px;

    ${CategoryList} {
      gap: 20px;
    }

    ${CategoryItem} {
      width: 140px;
      padding: 20px;

      img {
        width: 80px;
      }
    }

    ${ProductPageHeader} {
      h1 {
        font-size: 32px;
      }

      p {
        font-size: 12px;
      }
    }

    ${CategoryHeader} {
      font-size: 24px;
    }

    ${AllProductHeader} {
      font-size: 24px;
    }

    ${AllProductList} {
      margin: 20px 0;
    }
  }
`;
