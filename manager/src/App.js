import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCn49Yh8eUJ0YWj_kcX_Bscsne1ygvr5oU",
            authDomain: "manager-b4dbb.firebaseapp.com",
            databaseURL: "https://manager-b4dbb.firebaseio.com",
            projectId: "manager-b4dbb",
            storageBucket: "",
            messagingSenderId: "354689771078"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!!!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
