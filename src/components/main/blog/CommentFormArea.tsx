import Styled from './CommentFormArea.styled';
import useCommentFormArea from '../../../hooks/main/useBlog/useCommentFormArea';

function CommentFormArea({
  count,
  refetch,
}: {
  count: number;
  refetch: () => void;
}) {
  const [
    nicknameRef,
    passwordRef,
    isSecretRef,
    textAreaRef,
    handleResizeHeight,
    onSubmit,
  ] = useCommentFormArea({ refetch });

  return (
    <Styled.CommentArea>
      <div className="text-count">{count}개의 댓글</div>
      <div className="text-header">
        <div className="header-wrapper">
          <input
            type="text"
            name="username"
            placeholder="닉네임(미입력시 익명)"
            autoComplete="off"
            ref={nicknameRef}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            maxLength={4}
            autoComplete="new-password"
            ref={passwordRef}
          />
        </div>
        <div className="header-wrapper">
          <label htmlFor="secret-check">비밀 댓글</label>
          <input
            type="checkbox"
            id="secret-check"
            name="is_secret"
            ref={isSecretRef}
          />
        </div>
      </div>
      <textarea
        ref={textAreaRef}
        spellCheck={false}
        placeholder="댓글을 작성하세요"
        onInput={handleResizeHeight}
      />
      <div className="submit-btn" onClick={onSubmit}>
        댓글 작성
      </div>
    </Styled.CommentArea>
  );
}

export default CommentFormArea;
