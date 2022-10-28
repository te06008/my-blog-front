import { useEffect } from 'react';
import useIntersectionObserver from '../../useIntersectionObserver';

function usePosts({ scrollCallback }: { scrollCallback: () => void }) {
  const [targetElement, setIntersectionObserver, unsetIntersectionObserve] =
    useIntersectionObserver();

  useEffect(() => {
    setIntersectionObserver(scrollCallback);
    return () => {
      unsetIntersectionObserve();
    };
  });

  return [targetElement] as [typeof targetElement];
}

export default usePosts;
