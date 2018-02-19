import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDfjM7HNfWs-gO6VNJj6c2XmgXIOl6D6PY',
            authDomain: 'authenticaton-3311e.firebaseapp.com',
            databaseURL: 'https://authenticaton-3311e.firebaseio.com',
            projectId: 'authenticaton-3311e',
            storageBucket: 'authenticaton-3311e.appspot.com',
            messagingSenderId: '885099817256'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
