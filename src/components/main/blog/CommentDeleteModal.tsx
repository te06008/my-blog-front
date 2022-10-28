import { memo } from 'react';
import useCommentDeleteModal from '../../../hooks/main/useBlog/useCommentDeleteModal';
import Styled from './CommentDeleteModal.styled';

function CommentDeleteModal() {
  const [
    firstRef,
    secondRef,
    thirdRef,
    fourthRef,
    onFirstKeyUp,
    onSecondKeyUp,
    onThridKeyUp,
  ] = useCommentDeleteModal();

  return (
    <Styled.CommentDeleteModal>
      <Styled.ModalBody>
        <div className="title">댓글 삭제</div>
        <div className="description">
          삭제할 비밀번호 4자리를 입력해 주세요.
        </div>
        <Styled.InputWrapper>
          <input
            onKeyUp={onFirstKeyUp}
            ref={firstRef}
            autoComplete="new-password"
            type="password"
            maxLength={1}
          />
          <input
            onKeyUp={onSecondKeyUp}
            ref={secondRef}
            autoComplete="new-password"
            type="password"
            maxLength={1}
          />
          <input
            ref={thirdRef}
            onKeyUp={onThridKeyUp}
            autoComplete="new-password"
            type="password"
            maxLength={1}
          />
          <input
            ref={fourthRef}
            autoComplete="new-password"
            type="password"
            maxLength={1}
          />
        </Styled.InputWrapper>
      </Styled.ModalBody>
      <Styled.ModalFooter>
        <button className="close-btn">취소</button>
        <button className="submit-btn">확인</button>
      </Styled.ModalFooter>
    </Styled.CommentDeleteModal>
  );
}

export default memo(CommentDeleteModal);
