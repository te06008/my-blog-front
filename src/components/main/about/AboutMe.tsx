import Styled from './AboutMe.styled';
import IntroduceMe from './IntroduceMe';

import myImg from '../../../assets/me.png';

function AboutMe() {
  return (
    <Styled.AboutMe>
      <Styled.IntroduceWrapper>
        <IntroduceMe />
        <img src={myImg} alt='이미지를 불러올수 없습니다...' />
      </Styled.IntroduceWrapper>
    </Styled.AboutMe>
  );
}

export default AboutMe;
