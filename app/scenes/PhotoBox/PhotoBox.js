import React, { PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    CameraRoll,
    Platform,
} from 'react-native';
import { styles } from './styles';


const renderStarIcon = (isFaved, iconName, size) => {
    return (
      <Icon name={iconName} size={24} color={isFaved ? 'yellow' : '#FFFFFF'} />
    )
}
const renderIcon = (iconName, size) => {
    return (
      <Icon name={iconName} size={size} color={'#FFFFFF'} />
    )
}

const PhotoBox = (props) => {
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: props.photo.user.profile_image.small }} />
            <Text style={styles.avatarName}>{props.photo.user.name}</Text>
          </View>
          <TouchableHighlight onPress={props.goToRecent}>
            {renderIcon('x', 24)}
          </TouchableHighlight>
        </View>
        <Image style={styles.image} source={{ uri: props.photo.urls.raw }}>
          <View style={styles.buttons}>
            {Platform.OS === 'ios' &&
              <TouchableOpacity onPress={() => CameraRoll.saveToCameraRoll(props.photo.urls.raw, "photo")}>
                {renderIcon('cloud-download', 24)}
              </TouchableOpacity>
                }
            <TouchableOpacity onPress={props.callSaveFave}>
              {renderStarIcon(props.isFaved, 'star', 24)}
            </TouchableOpacity>
          </View>
        </Image>
        <View style={styles.details}>
          <View style={styles.likes}>
            <Text style={styles.text} >Likes</Text><Text style={styles.likeNumbers}> {props.photo.likes}</Text>
          </View>
          <View style={styles.downloads}>
            <Text style={styles.text} >Downloads</Text><Text style={styles.downloadNumbers}> {props.photo.downloads}</Text>
          </View>
        </View>
      </View>
    )
}


PhotoBox.propTypes = {
    photo: PropTypes.object.isRequired
}

export default PhotoBox;