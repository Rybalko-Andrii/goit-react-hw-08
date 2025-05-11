import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // імпортуй з 'react-dom/client'
import "./index.css";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

// Створюємо корінь додатку
const root = ReactDOM.createRoot(document.getElementById("root"));

// Використовуємо новий метод render
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
