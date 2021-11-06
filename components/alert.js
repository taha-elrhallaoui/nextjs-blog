import styles from './alert.module.css';
import classNames from 'classnames';

export default function Alert({ children, type }) {
  return (
    <div
      className={classNames({
        [styles.success]: type === 'success',
        [styles.failure]: type === 'failure',
      })}
    >
      {children}
    </div>
  );
}
