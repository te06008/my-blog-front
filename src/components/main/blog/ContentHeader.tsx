import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import Styled from './ContentHeader.styled';

function ContentHeader() {
  return (
    <Styled.ContentHeader>
      <div className="content-header-title">An exhibit of Markdown</div>
      {/* <div className="content-header-subtitle">카테고리 : 일상</div> */}
      <div className="content-header-date">
        <BiCalendar size="1.2em" className="content-header-icon" />
        {'Dec 05, 2018'}
        <div className="divider" />
        <AiOutlineClockCircle size="1.2em" className="content-header-icon" />
        {'About 2 mins'}
      </div>
      <div className="content-header-tags">
        {[0, 1].map((tag) => (
          <div className="tag-text"># React</div>
        ))}
      </div>
    </Styled.ContentHeader>
  );
}

export default ContentHeader;
