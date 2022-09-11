import styled from 'styled-components';

export const JumbotronSection = styled.section`
  padding: 0 60px;
  margin-top: 100px;
  position: relative;

  img {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    padding: 0 20px;
    margin-top: 80px;
  }
`;

export const DescItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;

  img {
    height: 60px;
    width: 60px;
  }
`;

export const Location = styled.div``;

export const Desa = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

export const Kec = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const SubLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Kampung = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const RW = styled.div`
  display: flex;
  gap: 10px;
`;

export const RWItem = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export const DateDesc = styled.div``;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const Date = styled.div`
  font-size: 20;
  font-weight: 700;
`;

export const KknDesc = styled.div`
  position: absolute;
  height: 140px;
  bottom: -65px;
  width: max-content;
  background-color: #181622;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  display: flex;
  gap: 20px;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    height: 50px;
    border-radius: 10px;
    gap: 10px;
    padding: 10px;
    bottom: -20px;

    ${DescItem} {
      gap: 3px;
      padding: 5px;
      border-radius: 10px;

      img {
        height: 20px;
        width: 20px;
      }
    }

    ${Desa} {
      font-size: 5px;
    }

    ${Kec} {
      font-size: 5px;
    }

    ${Kampung} {
      font-size: 5px;
    }

    ${RW} {
      gap: 2px;
    }

    ${RWItem} {
      font-size: 5px;
    }

    ${Title} {
      font-size: 5px;
    }

    ${Date} {
      font-size: 5px;
    }
  }
`;
