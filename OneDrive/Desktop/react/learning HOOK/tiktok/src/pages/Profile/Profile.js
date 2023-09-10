import classNames from 'classnames/bind';
import style from './Profile.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { UnfollowIcon } from '~/icons';

const cx = classNames.bind(style);

function Profile() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('wrapper_user_infor')}>
            <Image src={Image} className={cx('avata')} />
            <div className={cx('user_infor')}>
               <h1 className={cx('nick_name')}>quy nguyen91</h1>
               <h2 className={cx('full_name')}>quy nguyen</h2>
               <div className={cx('message_and_unfollow')}>
                  <Button large outline className={cx('button_message')}>
                     Messages
                  </Button>
                  <div className={cx('icon_unfollow')}>
                     <UnfollowIcon />
                  </div>
               </div>
            </div>
         </div>
         <div>
            <p>307</p>
            <p>Following</p>
            <p>37</p>
            <p>Followers</p>
            <p>5</p>
            <p>Likes</p>
         </div>
         <p>No bio yet.</p>
         <div>
            <p>Videos</p>
            <p>Liked</p>
         </div>
      </div>
   );
}

export default Profile;
