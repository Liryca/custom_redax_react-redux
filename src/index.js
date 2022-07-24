import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from './custom-react-redux/myConnect';
import { store } from './store/store';
import App from './Components/App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
console.log(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


