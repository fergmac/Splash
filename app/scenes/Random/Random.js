import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { UserAvatar } from '../../components/UserAvatar';

// import Router from '../../navigation/routes';


const Random = (props) => {
    console.log(props.randomPhoto)
    return (
            <View>
                <Image
                    resizeMode={'cover'}
                    source={{ uri: props.randomPhoto.urls.raw }}
                    style={styles.image}
                    >
                    <UserAvatar user={props.randomPhoto.user} />
                </Image>
            </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 650,
        width: 400,
    },
    images: {
        flex: 1,
        height: 50,
        width: 50,

    }
});

Random.propTypes = {
    randomPhoto: React.PropTypes.object.isRequired
}

export default Random;