import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

axios.baseURL='https://127.0.0.1:8000';

ReactDOM.render(<App />,document.getElementById('root'));
