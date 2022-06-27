import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Home';
import './background.css'
//import SwitchToggle from './components/SwitchToggle/SwitchToggle';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Home />
		{/* <SwitchToggle /> */}
	</StrictMode>
);
