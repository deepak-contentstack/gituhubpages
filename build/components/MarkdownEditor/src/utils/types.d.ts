import { Editor as SlateEditor, Range } from 'slate';
export interface Editor extends SlateEditor {
    savedSelection: Range | null;
}
