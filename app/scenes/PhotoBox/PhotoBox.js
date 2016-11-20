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

const renderStarIcon = (isFaved, iconName, size) => {
    return (
      <Icon name={iconName} size={24} color={isFaved ? 'yellow' : '#999999'} />
    )
}
const renderIcon = (iconName, size) => {
    return (
        <Icon name={iconName} size={size} color={'#999999'} />
    )
}

const PhotoBox = (props) => {
    console.log("photos2", props.photo)
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{ uri: props.photo.user.profile_image.small }} />
                <Text style={styles.text}>{props.photo.user.name}</Text>
                </View>
                <TouchableHighlight onPress={props.goToRecent}>
                    {renderIcon('x', 24)}
                </TouchableHighlight>
            </View>
            <Image style={styles.image} source={{ uri: props.photo.urls.raw }}>
            <View style={styles.buttons}>
                {Platform.OS === 'ios' &&
                    <TouchableHighlight onPress={() => CameraRoll.saveToCameraRoll(props.photo.urls.raw, "photo")}>
                  
                        {renderIcon('cloud-download', 24)}
                    </TouchableHighlight>
                }
                <TouchableHighlight onPress={props.callSaveFave}>
                    {renderStarIcon(props.isFaved, 'star', 24)}
                </TouchableHighlight>
            </View>
            </Image>
            <View style={styles.details}>
                <Text style={styles.text} >Likes {props.photo.likes}</Text>
                <Text style={styles.text} >Downloads {props.photo.downloads}</Text>
            </View>
        </View>
    )
}


PhotoBox.propTypes = {
    photo: PropTypes.object.isRequired
}

export default PhotoBox;