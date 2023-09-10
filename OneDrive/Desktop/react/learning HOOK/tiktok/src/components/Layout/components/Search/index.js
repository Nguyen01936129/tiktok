import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '../../../hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const debounce = useDebounce(searchValue, 500);

   const inputRef = useRef();
   useEffect(() => {
      if (!debounce.trim()) {
         setSearchResult([]);
         return;
      }
      setLoading(true);
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
         .then((res) => res.json())
         .then((res) => {
            setSearchResult(res.data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [debounce]);

   //    const handleHideResult = () => {
   //       setShowResult(false);
   //    };
   return (
      <HeadlessTippy
         interactive
         visible={showResult && searchResult.length > 0}
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               {/* PopperWrapper will have the width equal search-result's width */}
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  {searchResult.map((result) => (
                     <AccountItem
                        key={result.id}
                        data={result}
                        onClick={() => {
                           setShowResult(false);
                           setSearchValue('');
                        }}
                     />
                  ))}
               </PopperWrapper>
            </div>
         )}
         onClickOutside={() => {
            setShowResult(false);
         }}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               value={searchValue}
               placeholder="Search accounts and videos"
               spellCheck={false}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
               <button
                  className={cx('clear')}
                  onClick={() => {
                     setSearchValue('');
                     // setSearchResult([]);
                     inputRef.current.focus();
                  }}
               >
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            <button className={cx('search-btn')}>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
