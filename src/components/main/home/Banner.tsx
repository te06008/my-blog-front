import Styled from './Banner.styled';
import SimpleImageSlider from 'react-simple-image-slider';

import imgA from '../../../assets/imgA.jpeg';
import imgB from '../../../assets/imgB.jpeg';

const images = [imgB, imgB, imgB, imgB];
function HomeBanner() {
  return (
    <Styled.HomeBanner>
      <SimpleImageSlider
        width={'100%'}
        height={'60vh'}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={5}
      />
      <Styled.HomeBannerText>
        {/* <div className='text-title'>게으른 개발자의 블로그</div>
        <div className='text-description'>
          Te06008의 블로그에 오신 것을 환영합니다.
        </div> */}
      </Styled.HomeBannerText>
    </Styled.HomeBanner>
  );
}

export default HomeBanner;
