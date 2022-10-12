import { useEffect, useRef } from 'react';

function useBlogTOC() {
  const tocRef = useRef<HTMLDivElement>(null);

  return [tocRef] as [typeof tocRef];
}

export default useBlogTOC;
