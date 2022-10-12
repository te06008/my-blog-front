import styled from 'styled-components';

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 60px 300px 0px;
  @media (max-width: 1600px) {
    padding: 60px 200px 0px;
  }
  @media (max-width: 1366px) {
    padding: 60px 150px 0px;
  }
  @media (max-width: 1024px) {
    padding: 60px 75px 0px;
  }
  @media (max-width: 768px) {
    padding: 60px 30px 0px;
  }
  @media (max-width: 480px) {
    padding: 60px 10px 0px;
  }
`;

const BlogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc(100% - 280px);
  @media (max-width: 1366px) {
    min-width: 100%;
  }
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default { Blog, BlogWrapper, BlogContent };
