import "./App.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import AppRouter from "./routing/AppRouter";
// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <AppRouter />
    </AlertProvider>
  );
}

export default App;
