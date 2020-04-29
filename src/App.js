import React from 'react';
import './App.css';
import Main from "./compononts/Main";
import configureStore from './stores/store';
import { Provider } from "react-redux";


const store = configureStore();

function App() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>

	);
}

export default App;
