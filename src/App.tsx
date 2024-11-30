import { useRoutes } from "react-router";
import routes from "./router";

function App() {
	return (
		<div className="w-screen h-screen bg-[url('/images/backgroud.png')] bg-cover bg-center">
      {useRoutes(routes)}
		</div>
	);
}

export default App;
