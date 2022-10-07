import { ChangeEvent, useCallback, useRef, useState } from 'react';

function useCommentFormArea() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [commentForm, setCommentForm] = useState({
    userName: '',
    password: '',
    isSecret: false,
    comment: '',
  });

  const handleResizeHeight = useCallback(() => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height =
      textAreaRef.current.scrollHeight - 40 + 'px';
  }, []);

  const onFormChange = (
    e: ChangeEvent<HTMLTextAreaElement> & ChangeEvent<HTMLInputElement>,
  ) => {
    const setValue = e.target.hasOwnProperty('checked')
      ? e.target.checked
      : e.target.value;
    setCommentForm({
      ...commentForm,
      [e.target.name]: setValue,
    });
  };

  return [textAreaRef, handleResizeHeight, commentForm, onFormChange] as [
    typeof textAreaRef,
    typeof handleResizeHeight,
    typeof commentForm,
    typeof onFormChange,
  ];
}

export default useCommentFormArea;
