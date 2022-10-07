import styled from 'styled-components';

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .text-count {
    color: #212529;
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
  .text-header {
    display: flex;
    /* @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
    } */
    justify-content: space-between;
    align-items: center;
    .header-wrapper {
      display: flex;
      gap: 20px;
      @media (max-width: 380px) {
        gap: 5px;
      }
      input {
        margin: 0px;
        font-size: 15px;
        height: 25px;
        border: 1px solid #ebebeb;
        border-radius: 4px;
        padding-left: 15px;
        @media (max-width: 760px) {
          padding-left: 10px;
          font-size: 14px;
        }
        @media (max-width: 480px) {
          font-size: 13px;
        }
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      label {
        cursor: pointer;
        margin: auto 0px;
        @media (max-width: 480px) {
          font-size: 14px;
        }
      }
      input[type='text'] {
        width: 150px;
        @media (max-width: 850px) {
          max-width: 120px;
        }
        @media (max-width: 480px) {
          max-width: 100px;
        }
        @media (max-width: 380px) {
          max-width: 70px;
        }
      }
      input[type='checkbox'] {
        cursor: pointer;
        margin: 3px 0px 0px -10px;
        min-height: 18px;
        min-width: 18px;
        @media (max-width: 480px) {
          min-height: 14px;
          min-width: 14px;
          margin-left: -13px;
        }
        @media (max-width: 380px) {
          margin-left: -3px;
        }
      }
    }
  }
  textarea {
    resize: none;
    font-size: 15px;
    padding: 1rem 1rem 1.5rem;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    min-height: 100px;
    margin: 0px;
    @media (max-width: 760px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
  .submit-btn {
    padding: 10px 20px;
    text-align: center;
    align-self: end;
    color: #ffffff;
    background-color: #12b886;
    border-radius: 4px;
    cursor: pointer;
    @media (hover: hover) {
      :hover {
        background-color: #20c997;
      }
    }
    @media (max-width: 760px) {
      font-size: 15px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { CommentArea };
