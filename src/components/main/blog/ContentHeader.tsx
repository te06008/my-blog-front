import { memo } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import getTimePassed from '../../../libs/getTimePassed';
import { HeaderDataInterface } from '../../../types';
import Styled from './ContentHeader.styled';
import dayjs from 'dayjs';
import getModifiedTime from '../../../libs/getModifiedTime';
import useContentHeader from '../../../hooks/main/useBlog/useContentHeader';
import { useNavigate, useLocation } from 'react-router-dom';

function ContentHeader({ data }: { data: HeaderDataInterface }) {
  const isLogin = window.sessionStorage.getItem('isLogin') === 'true';
  const [onBlogDelete] = useContentHeader();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Styled.ContentHeader>
      <Styled.HeaderWrapper>
        <Styled.HeaderLeft>
          <div className="content-header-title">{data.title}</div>
          {/* <div className="content-header-subtitle">카테고리 : 일상</div> */}
          <div className="content-header-date">
            <BiCalendar size="1.2em" className="content-header-icon" />
            {'Posted on ' +
              dayjs(data.create_datetime).format('YYYY년 MM월 DD일') +
              '작성됨'}
            <div className="divider" />
            <AiOutlineClockCircle
              size="1.2em"
              className="content-header-icon"
            />
            {getModifiedTime(data.create_datetime, data.update_datetime) ||
              getTimePassed(data.update_datetime) + ' 수정됨'}
          </div>
        </Styled.HeaderLeft>
        {isLogin && (
          <Styled.HeaderRight>
            <div
              className="header-right-text"
              onClick={() => navigate(`${location.pathname}/modify`)}
            >
              수정
            </div>
            <div className="header-right-text">|</div>
            <div className="header-right-text" onClick={onBlogDelete}>
              삭제
            </div>
          </Styled.HeaderRight>
        )}
      </Styled.HeaderWrapper>
      <div className="content-header-tags">
        {data.tags.map((tag) => (
          <div className="tag-text" key={tag}>{`#${tag}`}</div>
        ))}
      </div>
    </Styled.ContentHeader>
  );
}

export default memo(ContentHeader);
