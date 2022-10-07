import Styled from './BlogComment.styled';
import { IoPersonCircleSharp } from 'react-icons/io5';
import CommentFormArea from './CommentFormArea';

const comment = `지금까지는 커뮤니티에서 hoc나 render props 같은 패턴을 계속 만들어내는 동안 React 팀은 뭐하나하는
생각도 했었는데 이렇게 좋은 기능을 가져오려고 열심히 준비하고 있던 거군요.
+ v17의 suspense + client caching도 기다리고 있습니다 ㅜㅜ`;
function BlogComment() {
  return (
    <Styled.BlogComment>
      <CommentFormArea />
      <Styled.CommentList>
        {[0, 1, 2, 3].map((item) => (
          <Styled.CommentItem>
            <div className='comment-item-header'>
              <IoPersonCircleSharp size='3em' className='person-icon' />
              <div className='header-text'>
                <div className='username'>Te06008</div>
                <div className='date'>2022년 10월 7일 PM 3:42</div>
              </div>
            </div>
            <p className='comment-item-body'>{comment}</p>
          </Styled.CommentItem>
        ))}
      </Styled.CommentList>
    </Styled.BlogComment>
  );
}

export default BlogComment;
