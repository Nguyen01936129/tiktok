import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSignIn,
   faEllipsisVertical,
   faEarthAsia,
   faKeyboard,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import img from 'src/assets/images';
import { InboxIcon, MessageIcon, UploadIcon } from '~/icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';
const cx = classNames.bind(styles);
console.log(images.logo);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               code: 'en',
               title: 'English',
            },
            {
               code: 'vi',
               title: 'Vietnamese',
            },
            {
               code: 'sp',
               title: 'Spanish',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feefback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard Shortcuts',
   },
];

function Header() {
   //Handle logic
   const handleMenuChange = (MenuItem) => {
      // console.log(MenuItem);
   };

   const currentUser = true;

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/@quy',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coins',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Setting',
         to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/logout',
         saparate: true,
      },
   ];
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt="Tiktok logo" />
            </div>

            <Search />
            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                        </button>
                     </Tippy>

                     <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                        <button className={cx('action-btn')}>
                           <MessageIcon />
                        </button>
                     </Tippy>

                     <Tippy delay={[0, 200]} content="Message" placement="bottom">
                        <button className={cx('action-btn')}>
                           <InboxIcon />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Log In
                     </Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image src={img} className={cx('user-avata')} alt="Quy Nguyen" />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
