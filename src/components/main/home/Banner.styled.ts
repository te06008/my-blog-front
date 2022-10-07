import styled from 'styled-components';

const HomeBanner = styled.div`
  position: relative;
`;

const HomeBannerText = styled.div`
  position: absolute;
  color: white;
  top: 15%;
  left: 300px;
  @media (max-width: 1600px) {
    left: 200px;
  }
  @media (max-width: 1366px) {
    left: 150px;
  }
  @media (max-width: 1024px) {
    left: 75px;
  }
  @media (max-width: 768px) {
    left: 30px;
  }
  @media (max-width: 480px) {
    left: 10px;
  }
  .text-title {
    font-size: 36px;
    font-weight: 500;
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  .text-description {
    font-size: 18px;
    margin-top: 12px;
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { HomeBanner, HomeBannerText };
