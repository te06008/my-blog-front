import Styled from './Banner.styled';
import SimpleImageSlider from 'react-simple-image-slider';

import imgA from '../../../assets/imgA.jpeg';
import imgB from '../../../assets/imgB.jpeg';

import dog from '../../../assets/dog.png';
import turtle from '../../../assets/turtle.jpeg';
import sea from '../../../assets/sea.jpeg';
import me from '../../../assets/me.png';

const images = [dog, turtle, sea, me];
function HomeBanner() {
  return (
    <Styled.HomeBanner>
      <img src={dog} alt='이미지를 불러올수 없습니다..' />

      {/* <SimpleImageSlider
        width={'100%'}
        height={'60vh'}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={5}
      /> */}
      <Styled.HomeBannerText>
        <div className='text-title'>게으른 개발자의 블로그</div>
        <div className='text-description'>
          Te06008의 블로그에 오신 것을 환영합니다.
        </div>
      </Styled.HomeBannerText>
    </Styled.HomeBanner>
  );
}

export default HomeBanner;
