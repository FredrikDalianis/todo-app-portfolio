import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExportExcel from './Excelexport';



const STORAGE_KEY = 'TodoKey1337';

const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

console.log('Page loaded - Stored Todos from localStorage:', storedTodos);

const root = ReactDOM.createRoot(document.getElementById('root'));
const ExportExcelRoot= ReactDOM.createRoot(document.getElementById('excel'));
root.render(
  
    <App />


);
ExportExcelRoot.render(

        <ExportExcel 
        excelData={JSON.parse(localStorage.getItem(STORAGE_KEY)) || []} filename={'Excel Todo Export'}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
