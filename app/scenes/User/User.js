import React, { PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import styles from './styles';

const User = (props) => {
    console.log(props)
    return (

        <View style={styles.container}>
            <Image
                resizeMode={'cover'}
                source={{ uri: props.user.profile_image.large }}
                style={styles.image}
                />
            <Text>{ props.route.params.name}</Text>
            <Text onPress={props.goBackRecent}>
                Go back to Recent
       </Text>
        </View>
    )
}


User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;