import { memo, ReactNode, useEffect } from 'react';
import styled from 'styled-components';

function Modal({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return <ModalBackGround>{children}</ModalBackGround>;
}

export default memo(Modal);

const ModalBackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;
