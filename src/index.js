import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Home';
import './background.css'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Home />
	</StrictMode>
);
