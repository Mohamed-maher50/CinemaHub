import ReactDOM from "react-dom/client";

import {
  App,
  BrowserRouter,
  Drawer,
  React,
  SettingsProvider,
  store,
  Provider,
} from "./hooks/indexHook";
import Sidebar from "./components/utility/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SettingsProvider>
          <Drawer>
            <Drawer.Content>
              <App />
            </Drawer.Content>
            <Drawer.Sidebar>
              <Sidebar />
            </Drawer.Sidebar>
          </Drawer>
        </SettingsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
