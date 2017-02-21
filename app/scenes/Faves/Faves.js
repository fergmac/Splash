import React, { PropTypes } from 'react';
import {
    View,
    ListView,
    Image,
    TouchableHighlight
} from 'react-native';
import { styles } from './styles';

// const getPhoto = (data) => {
//     console.log(data)
//     console.log(data.urls.raw)

//     var url = data.urls.raw

//     if( !url )
//         url = data.urls.raw

//     return (
//               <View><Image style={styles.photo} source={{ uri: url}} /></View>
//     )
// }

const Faves = (props) => {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.photoGallery}
          dataSource={props.favedPhotos}
          renderRow={(data) => 
            <View>
              <TouchableHighlight onPress={() => props.goToPhotoBox(data)}>
                <Image style={styles.photo} source={{ uri: data.urls.raw }} />
              </TouchableHighlight>
            </View>
             }
        />
      </View >
    )
}

Faves.propTypes = {
    favedPhotos: PropTypes.object.isRequired
}

export default Faves;