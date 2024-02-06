import React from 'react'

interface AppProps {
	children: React.ReactNode;
}

function App({children}: AppProps) {
	return <section className="bg-red-100 h-screen flex">{children}</section>;
}

export default App;
