import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumItem from './AlbumItem';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(albumData =>
            <AlbumItem key={albumData.title} album={albumData} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
