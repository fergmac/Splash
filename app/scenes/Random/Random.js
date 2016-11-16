import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { UserAvatar } from '../../components/UserAvatar';
import styles from './styles';


const Random = (props) => {
    console.log(props.randomPhoto)
    return (
            <View style={styles.container}>
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


Random.propTypes = {
    randomPhoto: React.PropTypes.object.isRequired
}

export default Random;