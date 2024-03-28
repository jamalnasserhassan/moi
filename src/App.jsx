import { RouterProvider } from "react-router-dom";
import {routesTree} from "./router";

function App() {
	return <RouterProvider router={routesTree()} />
}
export default App;