import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './SuggestedAccounts.module.scss';
import SuggestAccountItem from './SuggestAccountItem';

const cx = classNames.bind(style);

function SuggestedAccounts({ label }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('account_heading')}>{label}</p>
         <SuggestAccountItem nickname="quy nguyen" fullname="bach duong" />
         <SuggestAccountItem nickname="ngan nguyen" fullname="ngan tau hai" />
         <SuggestAccountItem nickname="trong nguyen" fullname="trong luoi" />
         <SuggestAccountItem nickname="po nguyen" fullname="po li" />
         <p className={cx('see_more-account')}>See more</p>
      </div>
   );
}

SuggestedAccounts.propTypes = {
   label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
