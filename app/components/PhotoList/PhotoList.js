import React, { PropTypes } from 'react';
import {
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { UserAvatar } from '../UserAvatar';

const PhotoList = (props) => {

    return (
        <View style={styles.container}>
            <ListView
                dataSource={props.recentPhotos}
                renderRow={(data) => {
                    return (
                        <View style={styles.row}>
                            <Image style={styles.image} source={{ uri: data.urls.raw }} >
                                <TouchableOpacity onPress={props.onPress}>
                                    <UserAvatar user={data.user} goToUser={props.goToUser}/>
                                </TouchableOpacity>
                            </Image>
                        </View>)
                } }
                />
        </View>
    );
}
PhotoList.propTypes = {
    recentPhotos: PropTypes.object.isRequired,
}
export default PhotoList;