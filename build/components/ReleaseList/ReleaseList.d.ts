/// <reference types="react" />
import './ReleaseList.css';
interface ReleaseType {
    title: string;
    isLocked?: Boolean;
    isExpandable?: Boolean;
    selected?: Boolean;
}
interface ReleaseListProps {
    releases: ReleaseType[];
}
declare const ReleaseList: {
    (props: ReleaseListProps): JSX.Element;
    defaultProps: Partial<ReleaseListProps>;
};
export default ReleaseList;
