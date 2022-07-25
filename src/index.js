import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './components/Home';

import './background.css'
// import { Epagos } from './services/Epagos';

import './Styles/accordion.css';
import './Styles/styles.css'
import './Styles/tables.css'

//import { ErrorAlert } from './components/ErrorAlerts/ErrorAlert';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<p>20468120179</p>
		<Home />
		{/* <Epagos /> */}
	</StrictMode>
);
