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

  const onPreview = () => {
    const [title, content, category, tag] = getFormData();
    console.log('asdf');
    const previewJson = JSON.stringify({
      title: title,
      content: content,
      category: category,
      tags: tag,
    });
    window.localStorage.setItem('preview', previewJson);

    window.open('http://localhost:3000/preview', '_blank');
    const getpreview = window.localStorage.getItem('preview');

    if (getpreview) {
      console.log(JSON.parse(getpreview));
    }
  };

  const onSubmit = () => {
    const [title, content, category, tag] = getFormData();
    if (!onFormRequired({ title, content, category, tag })) {
      alert('모든 정보를 입력하지 않았습니다.');
      return;
    }
    alert('성공');
  };

  return [titleRef, contentRef, categoryRef, tagRef, onPreview, onSubmit] as [
    typeof titleRef,
    typeof contentRef,
    typeof categoryRef,
    typeof tagRef,
    typeof onPreview,
    typeof onSubmit,
  ];
}

export default useWrite;
