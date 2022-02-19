import React from 'react'
import ReactDom from 'react-dom';
import AppRouter from './routes/AppRouter';
import './styles/index.css';
import './styles/grid-header.css';

ReactDom.render(<AppRouter/>, document.getElementById('root'));
