import styled from 'styled-components';

const BlogComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: calc(100% - 280px);
  @media (max-width: 1366px) {
    min-width: 100%;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 36px 0px;
  border-bottom: 1px solid #ebebeb;
  @media (max-width: 768px) {
    gap: 14px;
  }
  .comment-item-header {
    display: flex;
    justify-content: space-between;

    .comment-item-wrapper {
      display: flex;
      height: 50px;
      gap: 24px;
      .person-icon {
        color: #b2b2b2;
        font-size: 18px;
        @media (max-width: 768px) {
          font-size: 16px;
        }
        @media (max-width: 480px) {
          font-size: 14px;
        }
      }
      .header-text {
        display: flex;
        flex-direction: column;
        margin-top: 6px;
        gap: 8px;
        @media (max-width: 768px) {
          margin-top: 4px;
        }
        @media (max-width: 480px) {
          margin-top: 3px;
        }
        .username {
          color: #212529;
          font-weight: 500;
          @media (max-width: 768px) {
            font-size: 15px;
          }
          @media (max-width: 480px) {
            font-size: 13px;
          }
        }
        .date {
          color: #868e96;
          font-size: 14px;
          font-weight: 300;
          @media (max-width: 768px) {
            font-size: 13px;
          }
          @media (max-width: 480px) {
            font-size: 12px;
          }
        }
      }
    }
    .header-delete-btn {
      margin-top: 16px;
      font-size: 15px;
      color: #2b2b2b;
      cursor: pointer;
      @media (hover: hover) {
        :hover {
          text-decoration: underline;
          //transform: scale(1.1);
        }
      }
      @media (max-width: 768px) {
        margin-top: 12px;
      }
      @media (max-width: 480px) {
        margin-top: 10px;
        font-size: 13px;
      }
    }
  }
  .comment-item-body {
    padding: 0px 4px;
    font-size: 18px;
    color: #212529;
    line-height: 1.7;
    //white-space: pre-wrap;
    word-break: keep-all;
    overflow-wrap: break-word;
    transition: color 0.125s ease-in 0s;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { BlogComment, CommentList, CommentItem };
