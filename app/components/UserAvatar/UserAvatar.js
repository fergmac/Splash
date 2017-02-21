/* eslint-disable */
import React, { PropTypes } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { styles } from './styles';
import Router from '../../navigation/routes.js'
import {Route} from '../../scenes/Recent'


const UserAvatar = (props) => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode={'contain'}
                source={{ uri: props.user.profile_image.medium }}
                style={styles.image}
                >
            </Image >
            <Text style={styles.text}>{props.user.name}</Text>
        </View>
    );
}


UserAvatar.propTypes = {
    user: React.PropTypes.object.isRequired,
}

export default UserAvatar;
