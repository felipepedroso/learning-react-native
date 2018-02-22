import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCn49Yh8eUJ0YWj_kcX_Bscsne1ygvr5oU',
            authDomain: 'manager-b4dbb.firebaseapp.com',
            databaseURL: 'https://manager-b4dbb.firebaseio.com',
            projectId: 'manager-b4dbb',
            storageBucket: '',
            messagingSenderId: '354689771078'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
