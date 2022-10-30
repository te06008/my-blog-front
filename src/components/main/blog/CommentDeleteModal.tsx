import { memo } from 'react';
import useCommentDeleteModal from '../../../hooks/main/useBlog/useCommentDeleteModal';
import Styled from './CommentDeleteModal.styled';

const passwordArray = [0, 1, 2, 3];

function CommentDeleteModal({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: (password: string) => Promise<void>;
}) {
  const [
    pwRef,
    pwValue,
    onKeyDown,
    closeRef,
    submitRef,
    onModalKeyUp,
    onSubmit,
  ] = useCommentDeleteModal();

  return (
    <Styled.CommentDeleteModal onKeyUp={onModalKeyUp}>
      <Styled.ModalBody>
        <div className='title'>댓글 삭제</div>
        <div className='description'>
          댓글 비밀번호 4자리를 입력해 주세요.
          <br />
          (Backspace키를 누르면 초기화됩니다)
        </div>

        <Styled.InputWrapper>
          {passwordArray.map((item, idx) => (
            <input
              onKeyDown={onKeyDown}
              ref={(element) => {
                pwRef.current[idx] = element;
              }}
              key={item}
              value={pwValue[idx]}
              autoComplete='new-password'
              type='password'
              maxLength={1}
            />
          ))}
        </Styled.InputWrapper>
      </Styled.ModalBody>
      <Styled.ModalFooter>
        <button className='close-btn' onClick={onClose} ref={closeRef}>
          취소
        </button>
        <button
          className='submit-btn'
          onClick={() => onSubmit(onConfirm)}
          ref={submitRef}
        >
          확인
        </button>
      </Styled.ModalFooter>
    </Styled.CommentDeleteModal>
  );
}

export default memo(CommentDeleteModal);
