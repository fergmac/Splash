import React from 'react';
import {
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import { UserAvatar } from '../../components/UserAvatar';
import { styles } from './styles';


const Random = (props) => {
    console.log(props.randomPhoto)
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => props.goToPhotoBox(props.randomPhoto)}>
          <Image
            resizeMode={'cover'}
            source={{ uri: props.randomPhoto.urls.raw }}
            style={styles.image}
          >
            <View style={styles.avatar}>
              <UserAvatar user={props.randomPhoto.user} />
            </View>
          </Image>
        </TouchableHighlight>
      </View>
    )
}


Random.propTypes = {
    randomPhoto: React.PropTypes.object.isRequired
}

export default Random;