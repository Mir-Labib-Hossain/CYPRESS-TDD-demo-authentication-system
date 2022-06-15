import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateOutlet from "./components/privateOutlet";
import { persistor, store } from "./redux/app/store";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<PrivateOutlet />}>
                <Route path="" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

if ((window as any).Cypress) {
  (window as any).store = store;
  console.log("xox");
}

export default App;
