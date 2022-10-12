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
  h2,
  h3 {
    font-size: 1.4rem;
    letter-spacing: -0.1px;
  }
  @media (max-width: 768px) {
    * {
      font-size: 15px;
    }
    h2,
    h3 {
      font-size: 1.2rem;
      letter-spacing: -0.3px;
    }
  }
  @media (max-width: 480px) {
    * {
      font-size: 14px;
    }
    h2,
    h3 {
      font-size: 1.1rem;
      letter-spacing: -0.5px;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { ContentBody };
