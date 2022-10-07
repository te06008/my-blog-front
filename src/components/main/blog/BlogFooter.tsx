import { BsFillCircleFill } from 'react-icons/bs';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Styled from './BlogFooter.styled';

function BlogFooter() {
  return (
    <Styled.BlogFooter>
      <Styled.FooterNavigator>
        <Styled.NavigatorItem isVisible={true}>
          <IoIosArrowBack size="1.5em" />
          <div className="navigator-item-text">React로 블로그 만들기</div>
        </Styled.NavigatorItem>
        <Styled.NavigatorItem isVisible={true}>
          <div className="navigator-item-text">React로 블로그 만들기</div>
          <IoIosArrowForward size="1.5em" />
        </Styled.NavigatorItem>
      </Styled.FooterNavigator>
      <Styled.RelatedPosts>
        <div className="posts-title"> Related Posts</div>
        {[0, 1, 2, 3].map((post) => (
          <div className="posts-item">
            <BsFillCircleFill size="0.4em" />
            React로 블로그 만들기
          </div>
        ))}
      </Styled.RelatedPosts>
    </Styled.BlogFooter>
  );
}

export default BlogFooter;
