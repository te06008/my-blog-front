import styled from 'styled-components';

const LoginBoxDiv = styled.div`
  background-color: #ffffff;
  height: 280px;
  width: 350px;
  padding: 20px 50px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  .form-wrapper {
    display: flex;
    flex-direction: column;
  }
  .form-title {
    color: black;
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
  }
  .input-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
  }
  .input-title {
    pointer-events: none;
    position: absolute;
    top: 4px;
    left: 11px;
    font-size: 16px;
    margin-top: 10px;
    color: gray;
    transition: all 0.2s;
    padding: 0 5px;
  }
  input:focus + .input-title,
  input:valid + .input-title {
    top: -20px;
    left: 3px;
    background-color: #ffffff;
    transform: scale(0.75);
    color: #1a73e8;
  }
  input {
    color: black;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 2px 0px;
    height: 28px;
    padding: 10px 15px;
    font-size: 16px;
    transition: all 0.2s;
  }
  input:focus,
  input:valid {
    border: 1px solid #1a73e8;
    outline: 1px solid #1a73e8;
  }
  .title-social-login {
    margin: 30px 0;
    color: black;
  }
  .title-social-login-wrapper {
    display: flex;
    justify-content: space-around;
  }
  button {
    height: 45px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &.login {
      font-size: 14px;
      margin-top: 20px;
      background-color: rgb(26, 115, 232);
    }
    &.ghub {
      background-color: #333;
    }
    &.kakao {
      background-color: #e9d417;
    }
    &.naver {
      background-color: #3eae0e;
    }
    &.google {
      background-color: #4285f4;
    }
    &.social {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      .ico {
        width: 30px;
        height: 30px;
      }
    }
  }
  .title-social-login {
    text-align: center;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { LoginBoxDiv };
