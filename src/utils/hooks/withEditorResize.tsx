import { useEffect } from 'react';

export const useEditorResize = (editorResizeRef, showEditHtml = false) => {
  useEffect(() => {
    if (!editorResizeRef) return;
    const current = editorResizeRef?.current;
    const document = current ? current.ownerDocument : window?.document;
    const prevEl: HTMLElement = current?.previousElementSibling;
    const nextEl: HTMLElement = current?.nextElementSibling;
    let y = 0;
    let h = 0;

    const mouseDownHandler = function (e) {
      e.preventDefault();
      e.stopPropagation();
      current.classList.add('resize-active');
      prevEl.style.pointerEvents = 'none';
      prevEl.style.userSelect = 'none';
      prevEl.setAttribute('contenteditable', 'false');
      if (nextEl) {
        nextEl.style.pointerEvents = 'none';
        nextEl.style.userSelect = 'none';
      }

      y = e.clientY;
      const styles = window.getComputedStyle(prevEl);
      h = parseInt(styles.height, 10);
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (prevEl) {
        const dy = e.clientY - y;
        prevEl.style.height = `${h + dy}px`;
      }
    };

    const mouseUpHandler = function (e) {
      e.preventDefault();
      e.stopPropagation();
      current.classList.remove('resize-active');
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      prevEl.setAttribute('contenteditable', 'true');
      prevEl.style.pointerEvents = null;
      prevEl.style.userSelect = null;
      if (nextEl) {
        nextEl.style.pointerEvents = null;
        nextEl.style.userSelect = null;
      }
    };

    current?.addEventListener('mousedown', mouseDownHandler);

    return () => {
      current?.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    }
  }, [editorResizeRef, showEditHtml]);
}