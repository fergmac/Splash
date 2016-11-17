import React, { PropTypes } from 'react';
import {
    View,
    ListView,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import { styles } from './styles';
import { UserAvatar } from '../UserAvatar';

const PhotoList = (props) => {
    console.log(props.recentPhotos)
    return (
        <View style={styles.container}>
            <ListView
                dataSource={props.recentPhotos}
                renderRow={(data) => {
                    return (
                        <View style={styles.row}>
                        <TouchableHighlight onPress={() => props.goToPhotoBox()}>
                            <Image style={styles.image} source={{ uri: data.urls.raw }} >
                            
                            {/*  wrapping the method in arrow function so that it isnt called before onPress*/}
                                <TouchableOpacity onPress={() => props.goToUser(data.user.username)}>
                                    <UserAvatar user={data.user} />
                                </TouchableOpacity>
                            </Image>
                            </TouchableHighlight>
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