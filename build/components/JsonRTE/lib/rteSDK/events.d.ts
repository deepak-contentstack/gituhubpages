declare const events: (editor: any) => {
    isFocused: () => boolean;
    focus: () => void;
    blur: () => void;
    isFullScreen: () => void;
};
export default events;
