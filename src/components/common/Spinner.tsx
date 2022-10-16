import styled from 'styled-components';

function Spinner() {
  return <SpinnerDiv />;
}

export default Spinner;

const SpinnerDiv = styled.div`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  margin: auto;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: 4px solid lightgrey;
  border-top-color: #2b2b2b;
  animation: spinner 0.8s ease infinite;
`;
