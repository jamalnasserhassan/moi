import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Polyfills
import 'react-app-polyfill/ie11';
import 'element-matches-polyfill';
import 'promise-polyfill/src/polyfill';
import 'unfetch/polyfill';
import 'abortcontroller-polyfill';
import 'element-closest';
import '@stimulus/polyfills';

import "./assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
