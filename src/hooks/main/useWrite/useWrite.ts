import { useRef } from 'react';

function useWrite() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<any>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);

  const getFormData = () => {
    const title = !titleRef.current ? '' : titleRef.current.value;
    const content = !contentRef.current
      ? ''
      : contentRef.current?.getInstance().getMarkdown();
    const category = !categoryRef.current ? '' : categoryRef.current.value;
    const tag = !tagRef.current ? '' : tagRef.current.value;

    return [title, content, category, tag] as [
      typeof title,
      typeof content,
      typeof category,
      typeof tag,
    ];
  };

  const onFormRequired = ({
    title,
    content,
    category,
    tag,
  }: {
    title: string;
    content: string;
    category: string;
    tag: string;
  }) => {
    const parsedContent = content
      .toString()
      .replace(/\n/g, '')
      .replace(/\s*/g, '');
    if (title && parsedContent && category && tag) return true;
    return false;
  };

  const onSubmit = () => {
    const [title, content, category, tag] = getFormData();
    if (!onFormRequired({ title, content, category, tag })) {
      alert('모든 정보를 입력하지 않았습니다.');
      return;
    }
    alert('성공');
  };

  return [titleRef, contentRef, categoryRef, tagRef, onSubmit] as [
    typeof titleRef,
    typeof contentRef,
    typeof categoryRef,
    typeof tagRef,
    typeof onSubmit,
  ];
}

export default useWrite;
