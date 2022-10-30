import { useEffect, useRef, useState } from 'react';

const pwRegEx = /^[\w`~!@#$%^&*()-=+]{1,1}$/;
const initValue = ['', '', '', ''];

function useCommentDeleteModal() {
  const index = useRef<number>(0);
  const pwRef = useRef<null[] | HTMLInputElement[]>([]);
  const [pwValue, setPwValue] = useState<string[]>(initValue);
  const closeRef = useRef<HTMLButtonElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const onReset = () => {
    index.current = 0;
    setPwValue(initValue);
    pwRef.current[0]!.focus();
  };

  const onModalKeyUp = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Escape') {
      closeRef.current!.focus();
    }
  };

  const getPassword = () => {
    let password = '';
    pwRef.current!.forEach((pw) => {
      password += pw!.value;
    });
    return password;
  };

  const onSubmit = (callbackFunc: Function) => {
    const password = getPassword();
    if (password.length !== 4) {
      alert('비밀번호를 입력해 주세요.');
      pwRef.current[index.current]!.focus();
      return;
    }
    callbackFunc(password);
    onReset();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Backspace') {
      onReset();
      return;
    }
    const isValid = pwRegEx.test(e.key);
    if (isValid) {
      const nextValue = pwValue.concat();
      nextValue[index.current] = e.key;
      if (index.current < 3) {
        index.current++;
        pwRef.current[index.current]!.focus();
      } else {
        submitRef.current!.focus();
      }
      setPwValue(nextValue);
    }
  };

  useEffect(() => {
    if (pwRef?.current.length > 0) {
      pwRef.current[0]!.focus();
    }
  }, []);

  return [
    pwRef,
    pwValue,
    onKeyDown,
    closeRef,
    submitRef,
    onModalKeyUp,
    onSubmit,
  ] as [
    typeof pwRef,
    typeof pwValue,
    typeof onKeyDown,
    typeof closeRef,
    typeof submitRef,
    typeof onModalKeyUp,
    typeof onSubmit,
  ];
}

export default useCommentDeleteModal;
