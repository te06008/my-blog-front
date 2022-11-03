import Styled from './Banner.styled';
import dog from '../../../assets/dog.png';

function HomeBanner() {
  return (
    <Styled.HomeBanner>
      <img src={dog} alt="이미지를 불러올수 없습니다.." />

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
        <div className="text-title">게으른 개발자의 블로그</div>
        <div className="text-description">
          Te06008의 블로그에 오신 것을 환영합니다.
        </div>
      </Styled.HomeBannerText>
    </Styled.HomeBanner>
  );
}

export default HomeBanner;
