import React, { PropTypes } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Octicons';

const PhotoBox = (props) => {
    return (
        <View style={styles.container} >
            <Icon name='x' size={24} color='yellow' />
            <TouchableHighlight onPress={}>
                <Icon name='cloud-download' size={24} color='yellow' />
            </TouchableHighlight>
            <TouchableHighlight onPress={}>
                <Icon name='star' size={24} color='yellow' />
            </TouchableHighlight>
            <Image style={styles.image} source={{ uri: props.photo.urls.raw }} />
            <Text style={styles.text} >{props.photo.likes}</Text>
            <Text style={styles.text} >{props.photo.downloads}</Text>
        </View>
    )
}


PhotoBox.propTypes = {
    photo: PropTypes.object.isRequired
}

export default PhotoBox;