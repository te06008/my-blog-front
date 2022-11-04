import styled from 'styled-components';

const CommentDeleteModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  padding: 40px;

  background-color: ${(p) => p.theme.backgroundColor.modal};
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  transform: translateX(-50%) translateY(-90%);
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 20px;
    text-align: center;
  }
  .description {
    font-size: 16px;
    text-align: center;
    line-height: 1.2;
  }
  gap: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  input[type='password'] {
    width: 40px;
    height: 60px;
    text-align: center;
    border: 1px solid black;
    border-radius: 4px;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  button {
    cursor: pointer;
    padding: 5px 10px;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    @media (hover: hover) {
      :hover {
        opacity: 0.8;
      }
    }
    line-height: 1.2;
  }
  .close-btn {
    background-color: #db4455;
  }
  .submit-btn {
    background-color: #3cb371;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { CommentDeleteModal, ModalBody, InputWrapper, ModalFooter };
