import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/redux";
import Counter from "./components/Counter";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
