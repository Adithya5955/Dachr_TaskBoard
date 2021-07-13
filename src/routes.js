// Pages
import {Taskboard} from './pages';


// Icons

import ViewColumnIcon from '@material-ui/icons/ViewColumn';

export default {
  items: [
   
    {
      path: '/taskboard',
      name: 'Taskboard',
      type: 'link',
      icon: ViewColumnIcon,
      component: Taskboard
    },
   
      ]
    };
   