import styled from 'styled-components';

const HomeBanner = styled.div`
  position: relative;
  img {
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    object-fit: cover;
    width: 100%;
    height: 60vh;
    animation: fadein 1s;
    @media (max-width: 800px) {
      height: 50vh;
    }
    @media (max-width: 480px) {
      height: 40vh;
    }
  }
`;

const HomeBannerText = styled.div`
  position: absolute;
  color: #4c4c4c;
  top: 45vh;
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
  @media (max-width: 800px) {
    top: 35vh;
  }
  @media (max-width: 768px) {
    left: 30px;
  }
  @media (max-width: 480px) {
    top: 30vh;
    left: 10px;
  }
  .text-title {
    font-size: 36px;
    font-weight: 600;
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  .text-description {
    font-size: 18px;
    font-weight: 500;
    margin-top: 12px;
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { HomeBanner, HomeBannerText };
