import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, PersonGroupIcon, LiveIcon } from 'src/icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} />
            <MenuItem title="Following" to={config.routes.following} icon={<PersonGroupIcon />} />
            <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
         </Menu>
         <SuggestedAccounts lable="Suggested accounts" />
         <SuggestedAccounts lable="Following accounts" />
      </aside>
   );
}
export default Sidebar;
