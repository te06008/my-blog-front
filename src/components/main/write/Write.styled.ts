import styled from 'styled-components';

const Write = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 60px 300px;
  gap: 20px;
  box-sizing: border-box;
  @media (max-width: 1600px) {
    padding: 60px 200px;
  }
  @media (max-width: 1366px) {
    padding: 60px 150px;
  }
  @media (max-width: 1024px) {
    padding: 60px 75px;
  }
  @media (max-width: 768px) {
    padding: 60px 30px;
  }
  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  //align-self: center;
`;

const TitleInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  height: 24px;
  width: 80%;
  font-size: 20px;
`;

const CategorySelect = styled.select`
  height: 24px;
  width: 300px;
  font-size: 15px;
`;

const TagInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  height: 20px;
  width: 80%;
  font-size: 15px;
  margin-top: -10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  button {
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    @media (hover: hover) {
      :hover {
        transform: scale(1.1);
      }
    }
  }
  .preview-btn {
    background-color: #ddd;
  }
  .submit-btn {
    background-color: #2db400;
    color: white;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Write,
  Title,
  TitleInput,
  CategorySelect,
  TagInput,
  ButtonWrapper,
};
