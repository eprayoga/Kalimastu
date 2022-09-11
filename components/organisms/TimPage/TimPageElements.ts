import styled from 'styled-components';

export const TimPageHeader = styled.div`
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

export const TimPageSection = styled.section`
  margin-top: 100px;
  padding: 0 120px;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
    margin-top: 80px;

    ${TimPageHeader} {
      h1 {
        font-size: 32px;
      }

      p {
        font-size: 12px;
      }
    }
  }
`;

export const VideoSection = styled.section`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  margin-bottom: 5px;
`;

export const Video = styled.iframe`
  width: 100%;
  outline: none;
  border: none;
  min-height 200px;
`;
