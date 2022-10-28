import { useCallback, useRef } from 'react';

function useIntersectionObserver() {
  const targetElement = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  const setIntersectionObserver = useCallback((callback: Function) => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              callback();
            }
          });
        },
      );
    }
    if (targetElement.current && observer.current) {
      observer.current.observe(targetElement.current);
    }
  }, []);

  const unsetIntersectionObserver = useCallback(() => {
    if (targetElement.current && observer.current)
      observer.current.unobserve(targetElement.current);
  }, []);

  return [
    targetElement,
    setIntersectionObserver,
    unsetIntersectionObserver,
  ] as [
    typeof targetElement,
    typeof setIntersectionObserver,
    typeof unsetIntersectionObserver,
  ];
}

export default useIntersectionObserver;
