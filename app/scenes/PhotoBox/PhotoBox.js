import React, { PropTypes } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight,
    CameraRoll,
    saveToCameraRoll,
    Platform,
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import { faved, saveFave } from '../../lib/databaseHelpers';


const PhotoBox = (props) => {
    return (
        <View style={styles.container} >
            <View style={styles.exitButton}>
                <TouchableHighlight onPress={props.goToRecent}>
                    <Icon name='x' size={24} color='white' />
                </TouchableHighlight>
            </View>
            <View style={styles.buttons}>
                {Platform.OS === 'ios' &&
                    <TouchableHighlight onPress={() => CameraRoll.saveToCameraRoll(props.photo.urls.raw, "photo")}>
                        <Icon name='cloud-download' size={24} color='white' />
                    </TouchableHighlight>
                }
                <TouchableHighlight onPress={props.callSaveFave}>
                    <Icon name='star' size={24} color='white' />
                </TouchableHighlight>
            </View>
            <Image style={styles.image} source={{ uri: props.photo.urls.raw }} />
            <View style={styles.details}>
                <Text style={styles.text} >Likes: {props.photo.likes}</Text>
                <Text style={styles.text} >Downloads: {props.photo.downloads}</Text>
            </View>
        </View>
    )
}


PhotoBox.propTypes = {
    photo: PropTypes.object.isRequired
}

export default PhotoBox;