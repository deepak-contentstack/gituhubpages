export const handleRteOverlayClick = (editorRef, isPlugin = false) => {
  let classes = editorRef.current.classList;
  if (isPlugin) {
    //@ts-ignore
    const postRobot = window.postRobot;
    postRobot.sendToParent('goFullscreen', { open: !classes.contains('fullscreen') });
  }
  classes.toggle('fullscreen');
}