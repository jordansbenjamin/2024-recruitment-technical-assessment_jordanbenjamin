import { type AppProps } from "./interfaces/propTypes";

function App({ children }: AppProps) {
	return <section className="h-screen flex">{children}</section>;
}

export default App;
