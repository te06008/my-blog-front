import styled from 'styled-components';

const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  letter-spacing: -0.5px;
  .intro-title {
    font-size: 36px;
    font-weight: 600;
    @media (max-width: 1366px) {
      font-size: 30px;
    }
  }
  p {
    color: #343a40;
    @media (max-width: 1366px) {
      font-size: 18px;
    }
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
  }
  ul {
    margin-top: -20px;
    list-style: disc;
  }
  ul > li {
    font-size: 20px;
    @media (max-width: 1366px) {
      margin-left: 30px;
      font-size: 18px;
    }
    color: #212529;
    margin-left: 40px;
    line-height: 1.4;
  }
  ul > li > ul {
    margin-top: 0;
    list-style: circle;
  }
  ul > li > ul > li {
    font-size: 18px;
    margin-top: 0;
    line-height: 1.3;
  }
  details {
    @media (max-width: 1366px) {
      font-size: 18px;
      margin-left: 10px;
    }
    margin-left: 20px;
    font-size: 20px;
    summary {
      cursor: pointer;
      line-height: 1.4;
    }
    ul {
      @keyframes growDown {
        0% {
          transform: scaleY(0);
        }
        100% {
          transform: scaleY(1);
        }
      }
      animation: growDown 300ms ease-in-out forwards;
      transform-origin: top center;
      margin-top: 0px;
      list-style: circle;
      li {
        @media (max-width: 1366px) {
          margin-left: 50px;
        }
        line-height: 1.3;
        font-size: 18px;
        margin-left: 60px;
      }
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { IntroContent };
