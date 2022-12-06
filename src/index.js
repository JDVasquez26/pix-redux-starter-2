import React from 'react' 
import { createRoot } from 'react-dom/client' 
import App from './components/App' 
//allows all children of our App to be able to access our Redux Store.
import { Provider } from "react-redux"; 
import { store } from "./store.js";

const root = createRoot(document.getElementById('app')) 
root.render(
    <Provider store={store}>
      <App/>  
    </Provider>

)

