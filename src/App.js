import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import MyContacts from "./modules/MyContacts";

import {store, persistor} from "./redux/store";



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <MyContacts />
      </PersistGate>
    </Provider>

  );
}

export default App;