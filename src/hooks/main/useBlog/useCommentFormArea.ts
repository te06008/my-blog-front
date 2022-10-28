import { useCallback, useRef } from 'react';
import { useParams } from 'react-router';
import { postComment } from '../../../libs/fetch';

function useCommentFormArea({ refetch }: { refetch: () => void }) {
  const { id } = useParams();
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const isSecretRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height =
      textAreaRef.current.scrollHeight - 40 + 'px';
  }, []);

  const getFormData = (): [string, string, boolean, string] => {
    const nickname = nicknameRef?.current?.value
      ? nicknameRef.current.value
      : '';
    const password = passwordRef?.current?.value
      ? passwordRef.current.value
      : '';
    const isSecret = isSecretRef?.current?.checked
      ? isSecretRef.current.checked
      : false;
    const comment = textAreaRef?.current?.value
      ? textAreaRef.current.value
      : '';
    return [nickname, password, isSecret, comment];
  };

  const isFormValid = ({
    nickname,
    password,
    isSecret,
    comment,
  }: {
    nickname: string;
    password: string;
    isSecret: boolean;
    comment: string;
  }) => {
    if (nickname.length > 10 || nickname.indexOf(' ') !== -1) {
      alert('닉네임은 공백없이 10자리 이하여야 합니다.');
      return false;
    }
    if (
      password.length < 4 ||
      password.length > 4 ||
      password.indexOf(' ') !== -1
    ) {
      alert('비밀번호는 공백없이 4자리여야 합니다.');
      return false;
    }
    const parsedComment = comment.replace(/\n/g, '').replace(/\s*/g, '');
    if (parsedComment.length === 0) {
      alert('댓글 내용을 입력해 주세요.');
      return false;
    }

    return true;
  };

  const resetForm = () => {
    nicknameRef.current!.value = '';
    passwordRef.current!.value = '';
    isSecretRef.current!.checked = false;
    textAreaRef.current!.value = '';
  };

  const fetchComment = async ({
    nickname,
    password,
    isSecret,
    comment,
  }: {
    nickname: string;
    password: string;
    isSecret: boolean;
    comment: string;
  }) => {
    if (!id) {
      alert('비정상적인 작동입니다.');
      return;
    }
    const [isSuccess, msg] = await postComment({
      id,
      nickname,
      password,
      isSecret,
      comment,
    });
    if (isSuccess) {
      resetForm();
      refetch();
    } else {
      alert(msg);
    }
  };

  const onSubmit = () => {
    const [nickname, password, isSecret, comment] = getFormData();
    if (isFormValid({ nickname, password, isSecret, comment })) {
      fetchComment({ nickname, password, isSecret, comment });
    }
  };

  return [
    nicknameRef,
    passwordRef,
    isSecretRef,
    textAreaRef,
    handleResizeHeight,
    onSubmit,
  ] as [
    typeof nicknameRef,
    typeof passwordRef,
    typeof isSecretRef,
    typeof textAreaRef,
    typeof handleResizeHeight,
    typeof onSubmit,
  ];
}

export default useCommentFormArea;
