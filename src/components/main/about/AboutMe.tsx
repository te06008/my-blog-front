import Styled from './AboutMe.styled';
import IntroduceMe from './IntroduceMe';

import myImg from '../../../assets/me.png';
import { Helmet } from 'react-helmet-async';

function AboutMe() {
  return (
    <Styled.AboutMe>
      <Helmet>
        <title>Te06008 | About</title>
        <meta
          name="description"
          property="og:description"
          content="About Page"
        />
        <meta name="url" property="og:url" content={window.location.href} />
      </Helmet>
      <Styled.IntroduceWrapper>
        <IntroduceMe />
        <img src={myImg} alt="이미지를 불러올수 없습니다..." />
      </Styled.IntroduceWrapper>
    </Styled.AboutMe>
  );
}

export default AboutMe;
