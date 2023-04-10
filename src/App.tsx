import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './assets/style/index.scss'

import Home from './pages/Home';
import Farm from './pages/Farm';
import FarmDetail from './pages/FarmDetail';
import Affiliate from './pages/Affiliate';


function App() {
	// @ts-ignore
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/farm" component={Farm}></Route>
				<Route exact path="/farm-detail" component={FarmDetail}></Route>
				<Route exact path="/affiliate" component={Affiliate}></Route>
				<Route exact path="*" component={Home}></Route>
			</Switch>
			<NotificationContainer/>
		</BrowserRouter>
	)
}

export default App
