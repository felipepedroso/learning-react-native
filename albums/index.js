// //  Original code from template
// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('albums', () => App);

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);
