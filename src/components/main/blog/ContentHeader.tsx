import { memo } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import getTimePassed from '../../../libs/getTimePassed';
import { HeaderDataInterface } from '../../../types';
import Styled from './ContentHeader.styled';
import dayjs from 'dayjs';

function ContentHeader({ data }: { data: HeaderDataInterface }) {
  return (
    <Styled.ContentHeader>
      <div className="content-header-title">{data.title}</div>
      {/* <div className="content-header-subtitle">카테고리 : 일상</div> */}
      <div className="content-header-date">
        <BiCalendar size="1.2em" className="content-header-icon" />
        {'Posted on ' + dayjs(data.create_datetime).format('YYYY년 MM월 DD일')}
        <div className="divider" />
        <AiOutlineClockCircle size="1.2em" className="content-header-icon" />
        {getTimePassed(data.update_datetime) + ' 수정됨'}
      </div>
      <div className="content-header-tags">
        {data.tags.map((tag) => (
          <div className="tag-text" key={tag}>{`#${tag}`}</div>
        ))}
      </div>
    </Styled.ContentHeader>
  );
}

export default memo(ContentHeader);
