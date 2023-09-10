import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './SuggestedAccounts.module.scss';
import Image from 'src/components/Image';
import config from '~/config';

const cx = classNames.bind(style);

function SuggestAccountItem({ nickname, fullname }) {
   return (
      <Link to={config.routes.profile} className={cx('wrapper_account')}>
         <Image src="" className={cx('avata')} />
         <div className={cx('user_account')}>
            <p className={cx('user_nickname')}>{nickname}</p>
            <p className={cx('user_fullname')}>{fullname}</p>
         </div>
      </Link>
   );
}

SuggestAccountItem.propTypes = {
   nickname: PropTypes.string.isRequired,
   fullname: PropTypes.string.isRequired,
};

export default SuggestAccountItem;
