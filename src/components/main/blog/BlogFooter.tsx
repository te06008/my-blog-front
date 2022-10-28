import { memo } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { FooterDataInterface } from '../../../types';
import Styled from './BlogFooter.styled';

function BlogFooter({ data }: { data: FooterDataInterface }) {
  const navigate = useNavigate();

  return (
    <Styled.BlogFooter>
      <Styled.FooterNavigator>
        <Styled.NavigatorItem
          isVisible={data.previous.id !== -1}
          onClick={() => navigate(`/blog/${data.previous.id}`)}
        >
          <IoIosArrowBack size="1.5em" />
          <div className="navigator-item-text">{data.previous.title}</div>
        </Styled.NavigatorItem>
        <Styled.NavigatorItem
          isVisible={data.next.id !== -1}
          onClick={() => navigate(`/blog/${data.next.id}`)}
        >
          <div className="navigator-item-text">{data.next.title}</div>
          <IoIosArrowForward size="1.5em" />
        </Styled.NavigatorItem>
      </Styled.FooterNavigator>
      {data.related_posts.length > 0 && (
        <Styled.RelatedPosts>
          <div className="posts-title"> Related Posts</div>
          {data.related_posts.map((post) => (
            <div className="posts-item" key={post.id}>
              <BsFillCircleFill size="0.4em" />
              <div
                className="posts-item-text"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                {post.title}
              </div>
            </div>
          ))}
        </Styled.RelatedPosts>
      )}
    </Styled.BlogFooter>
  );
}

export default memo(BlogFooter);
