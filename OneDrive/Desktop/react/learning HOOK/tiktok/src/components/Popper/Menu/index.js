import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './header';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {}; // when the Menu in Header file doesn't have prop onChange,
// the onChange won't be error

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];

   const renderItem = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };

   return (
      <Tippy
         placement="bottom-end"
         // visible
         interactive
         delay={[0, 500]}
         hideOnClick={hideOnClick}
         render={(attrs) => (
            <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
               {/* PopperWrapper will have the width equal seach-result's width */}
               <PopperWrapper className={cx('menu-propper')}>
                  {history.length > 1 && (
                     <Header
                        title="Language"
                        onBack={() => {
                           setHistory((prev) => prev.slice(0, prev.length - 1));
                        }}
                     />
                  )}
                  {renderItem()}
               </PopperWrapper>
            </div>
         )}
         onHide={() => setHistory((prev) => prev.slice(0, 1))}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
