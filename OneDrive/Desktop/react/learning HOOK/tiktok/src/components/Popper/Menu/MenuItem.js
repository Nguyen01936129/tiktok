import { json } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
   const classes = cx('menu-list', {
      saparate: data.saparate,
   });
   return (
      <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
         {data.title}
      </Button>
   );
}

export default MenuItem;
