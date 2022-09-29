/// <reference types="react" />
import PropTypes from 'prop-types';
declare const Twitter: {
    ({ id, parentClass, width }: {
        id: any;
        parentClass: any;
        width: any;
    }): JSX.Element;
    propTypes: {
        id: PropTypes.Requireable<string>;
        parentClass: PropTypes.Requireable<string>;
        width: PropTypes.Requireable<string>;
    };
    defaultProps: {
        id: string;
        parentClass: string;
        width: string;
    };
};
export default Twitter;
