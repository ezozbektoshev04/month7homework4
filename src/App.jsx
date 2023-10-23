import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Studens from "./components/Studens";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Studens />
      </div>
    </Provider>
  );
}

export default App;
