import styled from 'styled-components';

const AboutMe = styled.div`
  min-height: calc(85vh - 140px);
  display: flex;
  flex-direction: column;
  padding: 40px 300px;
  gap: 20px;
  @media (max-width: 1600px) {
    padding: 40px 200px;
  }
  @media (max-width: 1366px) {
    padding: 40px 150px;
  }
  @media (max-width: 1024px) {
    padding: 40px 75px;
  }
  @media (max-width: 768px) {
    padding: 20px 30px;
  }
  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const IntroduceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
  img {
    width: 450px;
    height: 500px;
    border-radius: 4px;
    @media (max-width: 1366px) {
      width: 400px;
      max-height: 500px;
    }
    @media (max-width: 1024px) {
      width: 100%;
      max-height: none;
      height: auto;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { AboutMe, IntroduceWrapper };
