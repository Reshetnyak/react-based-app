import {StatusTypeTextMap} from "./index";
import styles from './Status-indicator.module.css';

export const IndicatorSize = Object.freeze({
   Small: 'small',
   Medium: 'medium',
   Big: 'big',
});

export const StatusIndicator = ({status, size = IndicatorSize.Small}) => {
    const title = StatusTypeTextMap[status];
    return <span
        className={`${styles.statusIndicator} ${styles[status]} ${styles[size]}`}
        title={title}
    />;
};
