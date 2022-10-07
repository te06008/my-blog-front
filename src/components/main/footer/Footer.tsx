import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import Styled from './Footer.styled';

function Footer() {
  return (
    <Styled.Footer>
      <div className="footer-row">
        <AiOutlineCopyrightCircle size="1.1em" className="footer-icon" />
        {'2022 Te06008. All Rights Reserved.'}
      </div>
    </Styled.Footer>
  );
}

export default Footer;
