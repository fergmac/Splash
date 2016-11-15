
import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';

const UserAvatar = (props) => {
    console.log(props.user)
    return (
        <View style={styles.avatarContainer}>
            <Image
                resizeMode={'contain'}
                source={{ uri: props.user.profile_image.medium }}
                style={styles.avatar}
                >
            </Image >
            <Text style={styles.avatar}>{props.user.name} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
    },
    avatar: {
        flex: .25,
        borderRadius: 50,
        height: 50,
        width: 50,
        backgroundColor: 'transparent',
    }
});

UserAvatar.propTypes = {
    user: React.PropTypes.object.isRequired
}

export default UserAvatar;
