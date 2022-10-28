import { useEffect, useRef } from 'react';

function useCommentDeleteModal() {
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);

  const onFirstKeyUp = () => {
    secondRef.current!.focus();
  };
  const onSecondKeyUp = () => {
    thirdRef.current!.focus();
  };
  const onThirdKeyUp = () => {
    fourthRef.current!.focus();
  };

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current.focus();
    }
  }, []);

  return [
    firstRef,
    secondRef,
    thirdRef,
    fourthRef,
    onFirstKeyUp,
    onSecondKeyUp,
    onThirdKeyUp,
  ] as [
    typeof firstRef,
    typeof secondRef,
    typeof thirdRef,
    typeof fourthRef,
    typeof onFirstKeyUp,
    typeof onSecondKeyUp,
    typeof onThirdKeyUp,
  ];
}

export default useCommentDeleteModal;
