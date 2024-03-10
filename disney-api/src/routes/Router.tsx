import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'character/:id',
        element: <Detail />,
      },
    ],
  },
]);

export default Router;
