import styled from 'styled-components';

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  max-width: 70%;
  @media (max-width: 1600px) {
    max-width: 65%;
  }
  @media (max-width: 1366px) {
    max-width: 60%;
  }
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 30px;
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .post-header-title {
    font-size: 23px;
    font-weight: 600;
    color: #333;
    //cursor: pointer;
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
  .post-header-date {
    display: flex;
    font-size: 14px;
    color: #828282;
    align-items: center;
    @media (max-width: 480px) {
      font-size: 12px;
    }
    .divider {
      height: 70%;
      width: 1px;
      background-color: #828282;
      margin: 2px 10px 0px 10px;
    }
    .post-header-icon {
      margin-top: 2px;
      margin-right: 2px;
    }
  }
`;

const PostBody = styled.div`
  max-width: 100%;
  word-break: break-word;
  color: #777;
  font-size: 14px;
  line-height: 1.6;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 12px;
  }
  @media (hover: hover) {
    :hover {
      text-decoration: underline;
    }
  }
`;

const PostCategory = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
  .category-decoration {
    padding: 4px;
    color: #ff5100;
    border: 1px solid #ff5100;
    border-radius: 2px;
    @media {
      :hover {
        cursor: pointer;
        filter: invert(50%);
      }
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Posts, PostWrapper, PostHeader, PostBody, PostCategory };
