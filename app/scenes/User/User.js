import React, { PropTypes } from 'react';
import {
    View,
    Text,
    Image,
    ListView
} from 'react-native';
import { styles } from './styles';

// const renderHeader = () => (
 
// )

const User = (props) => {
    console.log("user", props.user)
    console.log("photos", props)
    return (
      <View style={styles.container}>
        <ListView
          renderHeader={() => {
                return(
                  <View style={styles.user}>
                    <Image style={styles.image} source={{ uri: props.user.profile_image.medium }} />
                    <Text style={styles.text}>{props.user.name}</Text>
                    <Text style={styles.text}>{props.user.location}</Text>
                    <Text style={styles.text}>{props.user.portfolio_url}</Text>
                  </View>)}}
          contentContainerStyle={styles.photoGallery}
          dataSource={props.photos}
          renderRow={(data) => {
                return (
                  <View><Image style={styles.photo} source={{ uri: data.urls.raw }} /></View>
                )
            }}
        />
      </View>
    )
}


User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;