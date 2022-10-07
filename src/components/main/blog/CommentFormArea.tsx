import Styled from './CommentFormArea.styled';
import useCommentFormArea from '../../../hooks/main/useBlog/useCommentFormArea';

function CommentFormArea() {
  const [textAreaRef, handleResizeHeight, commentForm, onFormChange] =
    useCommentFormArea();
  return (
    <Styled.CommentArea>
      <div className='text-count'>2개의 댓글</div>
      <div className='text-header'>
        <div className='header-wrapper'>
          <input
            type='text'
            name='userName'
            placeholder='닉네임'
            value={commentForm.userName}
            onChange={onFormChange}
            autoComplete='off'
          />
          <input
            type='text'
            name='password'
            value={commentForm.password}
            placeholder='비밀번호'
            onChange={onFormChange}
            maxLength={4}
            autoComplete='off'
          />
        </div>
        <div className='header-wrapper'>
          <label htmlFor='secret-check'>비밀 댓글</label>
          <input
            type='checkbox'
            id='secret-check'
            name='isSecret'
            checked={commentForm.isSecret}
            onChange={onFormChange}
          />
        </div>
      </div>
      <textarea
        ref={textAreaRef}
        spellCheck={false}
        placeholder='댓글을 작성하세요'
        onInput={handleResizeHeight}
      />
      <div className='submit-btn'>댓글 작성</div>
    </Styled.CommentArea>
  );
}

export default CommentFormArea;
