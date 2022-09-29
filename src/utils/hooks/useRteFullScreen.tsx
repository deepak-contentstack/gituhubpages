import { useEffect, useState } from "react";

export const useRteFullScreen = (editorRef) => {
  const [isFullScreen, setFullScreen] = useState(false);
  useEffect(() => {
    if (!editorRef?.current) return;

    function callback(mutationList) {
      mutationList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          const fullscreen = editorRef.current.classList.contains('fullscreen');
          setFullScreen(fullscreen);
        }
      })
    }
    const mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(
      editorRef.current,
      { attributes: true }
    )
    return () => {
      mutationObserver.disconnect();
    }
  }, [editorRef]);

  return isFullScreen;
}