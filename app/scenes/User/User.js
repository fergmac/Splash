import React, { PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView
} from 'react-native';
import styles from './styles';

const User = (props) => {
    console.log(props)
    return (

        <View>
            <Image
                resizeMode={'cover'}
                source={{ uri: props.user.profile_image.large }}
                style={styles.image}
                />
            <Text>{props.user.first_name}</Text>
            <Text onPress={props.goToRecent}>
                Go back to Recent
            </Text>
        </View >
    )
}


User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;