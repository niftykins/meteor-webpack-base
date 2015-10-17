import ReactRouterSSR from 'react-router-ssr';
import {Route} from 'react-router';

import ServerRoutes from './components/ServerTest/routes';

ReactRouterSSR.Run(
	<Route>
		{ServerRoutes}
	</Route>
);
