import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Sidebar from './layout/Sidebar.tsx'
import Main from './layout/Main.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App>
			<Sidebar />
			<Main />
		</App>
	</React.StrictMode>
);
