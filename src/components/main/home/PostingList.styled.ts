import styled from 'styled-components';

const PostingList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 300px;
  gap: 36px;
  @media (max-width: 1600px) {
    padding: 0px 200px;
  }
  @media (max-width: 1366px) {
    padding: 0px 150px;
  }
  @media (max-width: 1024px) {
    padding: 0px 75px;
  }
  @media (max-width: 768px) {
    padding: 0px 30px;
  }
  @media (max-width: 480px) {
    padding: 0px 10px;
  }
`;

const PostingListHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  max-width: 70%;
  gap: 20px;
  font-weight: 600;
  min-height: 44px;
  @media (max-width: 768px) {
    max-width: 100%;
    gap: 10px;
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
  .header-title {
    width: auto;
    font-size: 28px;
    @media (max-width: 1024px) {
      font-size: 25px;
    }
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  .header-selected-list {
    display: flex;
    gap: 15px;
  }
`;

const SelectedCategory = styled.div`
  position: relative;
  padding: 10px;
  font-size: 24px;
  color: #ffffff;
  background-color: #6c757d;
  border-radius: 5px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (hover: hover) {
    :hover {
      cursor: pointer;
      ::after {
        opacity: 0.9;
        width: 25px;
        height: 25px;
        color: black;
        background-color: #aaaaaa;
        border-radius: 100%;
        position: absolute;
        top: -9px;
        right: -11px;
        font-size: 1.3rem;
        content: 'x';
        text-align: center;
        @media (max-width: 480px) {
          width: 20px;
          height: 20px;
          font-size: 1rem;
        }
      }
    }
  }
`;

const PostingListBody = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  PostingList,
  PostingListHeader,
  SelectedCategory,
  PostingListBody,
};
