
import React, { PropTypes } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import styles from './styles';
import Router from '../../navigation/routes.js'
import {Route} from '../../scenes/Recent'


const UserAvatar = (props) => {
    console.log(props.user)
    return (
        <View>
            <Image
                resizeMode={'contain'}
                source={{ uri: props.user.profile_image.medium }}
                
                >
            </Image >
            <Text>{props.user.name} </Text>
        </View>
    );
}


UserAvatar.propTypes = {
    user: React.PropTypes.object.isRequired,
}

export default UserAvatar;
