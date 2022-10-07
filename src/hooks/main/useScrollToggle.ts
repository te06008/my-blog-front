import { useEffect, useRef } from 'react';

function useScrollToggle() {
  const scrollBtnRef = useRef<HTMLDivElement>(null);

  const moveToTop = () => window.scrollTo({ top: 0, behavior: 'auto' });

  const updateScroll = () => {
    if (!scrollBtnRef.current) return;
    const { scrollY } = window;
    scrollY > 100
      ? (scrollBtnRef.current.style.opacity = '1')
      : (scrollBtnRef.current.style.opacity = '0');
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return [scrollBtnRef, moveToTop] as [typeof scrollBtnRef, typeof moveToTop];
}

export default useScrollToggle;
