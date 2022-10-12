import { useEffect, useRef } from 'react';
import { TOCList } from '../../../types';

function useContentBody({
  setTocList,
}: {
  setTocList: React.Dispatch<React.SetStateAction<TOCList[]>>;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!contentRef.current) {
      return;
    }
    if (contentRef.current.firstChild?.firstChild instanceof HTMLElement) {
      const contentNodes = Array.from(
        contentRef.current.firstChild.firstChild.children,
      );
      const tocList: TOCList[] = [];
      (contentNodes as HTMLElement[]).map((node, index) => {
        if (node.nodeName.match(/H[2-3]/) && node.innerText) {
          const newId: string = `${index}`;
          const isTabbed: boolean = node.nodeName === 'H3';
          const text: string = node.innerText;
          node.id = newId;
          tocList.push({ text, isTabbed, id: newId });
        }
      });
      setTocList(tocList);
    }
  }, [setTocList]);

  return [contentRef] as [typeof contentRef];
}

export default useContentBody;
