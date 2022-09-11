import styled from 'styled-components';

export const LokakaryaCardContainer = styled.div`
  width: 320px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 25px;
`;

export const LokakaryaImageContainer = styled.div`
  width: 270px;
  height: 215px;
  overflow: hidden;
  border-radius: 20px;

  img {
    object-fit: cover;
  }
`;

export const LokakaryaType = styled.div`
  background-color: rgba(255, 208, 85, 0.1);
  border-radius: 5px;
  padding: 5px 10px;
  color: #ffd055;
  font-weight: 400;
  font-size: 10px;
  width: fit-content;
  margin: 10px 0;
`;

export const LokakaryaName = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-align: left;
`;

export const LokakaryaLocate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

export const LocateIcon = styled.img`
  height: 20px;
`;

export const LocateName = styled.div`
  font-weight: 400;
  font-size: 10px;
  color: #8e8e8e;
`;
