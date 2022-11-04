import styled from 'styled-components';

interface MenuItemInterface {
  selected: boolean;
}

const CategoryEditModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  padding: 40px;

  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  transform: translateX(-50%) translateY(-90%);
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  z-index: 998;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .title {
    font-size: 20px;
    text-align: center;
  }
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.div<MenuItemInterface>`
  padding: 5px 0px;
  cursor: pointer;
  width: calc(100% / 3);
  text-align: center;
  border-bottom: ${(p) =>
    p.selected ? '2px solid darkred' : '1px solid black'};
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  select {
    min-height: 20px;
    width: 270px;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 4px;
  }
`;

const InputBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  label {
    font-size: 20px;
  }
  input[type='text'] {
    min-height: 20px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 4px;
    width: 200px;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  CategoryEditModal,
  ModalBody,
  Menu,
  MenuItem,
  ModalFooter,
  Wrapper,
  InputBox,
};
