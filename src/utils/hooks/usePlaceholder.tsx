import { useEffect, useRef } from 'react';

export const usePlaceholder = () => {
  const prevTargetRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (e) => {
      const selection = document.getSelection();
      const isCollapsed = selection.isCollapsed;
      if (!isCollapsed) return;
      const slateEmptyNode = e.target.querySelector('[data-slate-zero-width="n"]');
      slateEmptyNode.classList.add("showPlaceholder");
      prevTargetRef.current?.classList.remove("showPlaceholder");
      // console.error("pointer down", slateEmptyNode, e.target);
      prevTargetRef.current = e.target.querySelector('[data-slate-zero-width="n"]');
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    }
  }, []);
}