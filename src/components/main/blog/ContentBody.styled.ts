import styled from 'styled-components';

const ContentBody = styled.div`
  //min-height: 100vh;
  h1,
  h2 {
    border: none;
  }
  * {
    padding-top: 15px;
    font-size: 16px;
  }
  h2 {
    letter-spacing: -0.1px;
    font-size: 1.8rem;
    font-weight: 700;
  }
  h3 {
    letter-spacing: -0.1px;
    font-size: 1.5rem;
    font-weight: 500;
  }
  img {
    max-height: 600px;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    * {
      font-size: 16px;
    }
    h2 {
      font-size: 1.7rem;
      letter-spacing: -0.3px;
    }
    h3 {
      font-size: 1.4rem;
      letter-spacing: -0.3px;
    }
  }
  @media (max-width: 480px) {
    * {
      font-size: 14px;
    }
    h2 {
      font-size: 1.6rem;
      letter-spacing: -0.5px;
    }
    h3 {
      font-size: 1.3rem;
      letter-spacing: -0.5px;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { ContentBody };
