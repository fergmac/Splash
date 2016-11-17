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
            <Text>{props.user.name}</Text>
            <Text>{props.user.location}</Text>
            <Text>{props.user.portfolio_url}</Text>
            <Text>{props.user.bio}</Text>
            <Text onPress={props.goToRecent}></Text>
            

        </View >
    )
}


User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;