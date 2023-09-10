// layouts
import { HeaderOnly } from 'src/components/Layout';
import Home from 'src/pages/Home';
import Following from 'src/pages/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live/live';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/following', component: Following },
   // { path: '/profile', component: Profile },
   { path: '/:nickname', component: Profile },
   // @ won't change, nickname will be changed
   { path: '/upload', component: Upload, layout: HeaderOnly },
   { path: '/search', component: Search, layout: null },
   { path: '/live', component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
