import Styled from './Posts.styled';
import { BiCalendar } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { PostingListModel } from '../../../models';
import dayjs from 'dayjs';
import getTimePassed from '../../../libs/getTimePassed';
import Spinner from '../../common/Spinner';
import usePosts from '../../../hooks/main/useHome/usePosts';
import { memo } from 'react';
import { tagParser } from '../../../libs/tagParser';
import getModifiedTime from '../../../libs/getModifiedTime';

function Posts({
  data,
  scrollCallback,
  onTagClick,
}: {
  data: PostingListModel[];
  scrollCallback: () => void;
  onTagClick: (e: string) => void;
}) {
  const navigate = useNavigate();
  const [targetElement] = usePosts({ scrollCallback });
  return (
    <Styled.Posts>
      {data.map((post, key) => (
        <Styled.PostWrapper key={post.id} isEnd={data.length - 1 === key}>
          <Styled.PostHeader>
            <div className="post-header-title">
              <div
                className="title-text"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                {post.title}
              </div>
            </div>
            <div className="post-header-date">
              <BiCalendar size="1.2em" className="post-header-icon" />
              {dayjs(post.created_at).format('YYYY년 MM월 DD일')}
              <div className="divider" />
              <AiOutlineClockCircle size="1.2em" className="post-header-icon" />
              {getModifiedTime(post.created_at, post.updated_at) ||
                getTimePassed(post.updated_at)}
            </div>
          </Styled.PostHeader>
          <Styled.PostBody
            onClick={() => navigate(`/blog/${post.id}`)}
          >{`${post.content}... Read More`}</Styled.PostBody>
          <Styled.PostCategory>
            {tagParser(post.tags).map((tag) => (
              <div
                className="category-decoration"
                key={tag}
                onClick={() => onTagClick(tag)}
              >{`#${tag}`}</div>
            ))}
          </Styled.PostCategory>
        </Styled.PostWrapper>
      ))}
      {data.length > 0 && <div className="observer" ref={targetElement} />}
    </Styled.Posts>
  );
}

export default memo(Posts);
