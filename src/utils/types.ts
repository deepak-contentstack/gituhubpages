import { Element, Editor } from "slate";

export interface ExtendedEditor extends Editor {
  requestProps?: any;
  uniqueId?: string;
  savedSelection?: any;
}

export interface ElementWithType extends Element {
  type: string;
  attrs?: any;
  meta?: any;
  checked?: boolean;
}