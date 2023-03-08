import React from 'react'
import ReactDOM from 'react-dom/client'
// external imports
import { Provider } from 'react-redux';
import reducers from './reducers';
// components
import App from './App'
// styles
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={reducers}>
      <App />
    </Provider>
  </React.StrictMode>
)
