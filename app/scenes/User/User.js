import React, { PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import styles from './styles';


const User = (props) => {
    return (
    
            <View style={styles.container}>
                <Image
                    resizeMode={'cover'}
                    source={{ uri: props.user.profile_image.large }}
                    style={styles.image}
                    />
                <Text>{props.user.name}</Text>
            </View>
            )
}


User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;