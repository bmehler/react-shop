import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.scss';
window.React = React

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);