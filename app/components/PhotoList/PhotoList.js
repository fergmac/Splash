import React, { PropTypes } from 'react';
import {
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import { styles } from './styles';
import { UserAvatar } from '../UserAvatar';

const PhotoList = (props) => {
    console.log("url", props.recentPhotos)
    return (
        <View style={styles.container}>
            <ListView
                dataSource={props.recentPhotos}
                renderRow={(data) => {
                    return (
                        <View style={styles.row}>
                            
                            <TouchableHighlight onPress={() => props.goToPhotoBox(data)}>
                                <Image style={styles.image} source={{ uri: data.urls.raw }} >
                                </Image>
                            </TouchableHighlight>
                            <TouchableOpacity onPress={() => props.goToUser(data.user.username)}>
                                <UserAvatar user={data.user} />
                            </TouchableOpacity>
                            <View style={styles.text}>
                            <Text>{data.created_at}</Text>
                            <Text>{data.location.city}, {data.location.country}</Text>
                            </View>
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