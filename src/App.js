import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const DefaultLayout = lazy(() => import('./DefaultLayout'))

function App() {
	return (
		<Switch>
			<Suspense fallback={<div>loading...</div>}>
				<Route path="/blog" component={DefaultLayout} />
			</Suspense>
		</Switch>
	);
}

export default App;
