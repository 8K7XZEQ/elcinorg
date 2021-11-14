import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, ProfilePage, StructurePage } from './pages';

const routes = [
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }, 
  {
    path: '/structure',
    component: StructurePage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
