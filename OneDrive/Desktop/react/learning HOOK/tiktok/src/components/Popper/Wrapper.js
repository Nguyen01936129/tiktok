import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
   // children to change the contain later
   return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
