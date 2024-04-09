import ReactDOM from "react-dom/client";

import {
  App,
  BrowserRouter,
  Drawer,
  React,
  store,
  Provider,
} from "./hooks/indexHook";
import Sidebar from "./components/utility/Sidebar";
import DiscoverDrawer, {
  DiscoverDrawerSlide,
} from "./components/Layout/DiscoverDrawer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Drawer>
        <Drawer.Content>
          <DiscoverDrawer>
            <DiscoverDrawer.Content>
              <App />
            </DiscoverDrawer.Content>
            <DiscoverDrawerSlide />
          </DiscoverDrawer>
        </Drawer.Content>
      </Drawer>
    </BrowserRouter>
  </Provider>
);
