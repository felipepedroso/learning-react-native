import React from 'react';
import { Text, View } from 'react-native';

const AlbumItem = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
};

export default AlbumItem;
