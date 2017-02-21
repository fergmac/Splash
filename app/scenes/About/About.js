import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';


const About = () => {
    return (
      <View>
        <Image
          resizeMode={'stretch'}
          source={require('../../images/red-logo.png')}
        />
        <Text>Splashify Mobile App</Text>
        <Text>Application Version: 1.0</Text>
        <Text>2016 RED Academy. All rights reserved.</Text>
        <Text>Credits:</Text>
        <Text>Splashify was built using the Unsplash API, with help from the following:</Text>
        <Text>ex-navigation</Text>
        <Text>react-native</Text>
        <Text>react-native-timeago</Text>
        <Text>react-native-vector-icons</Text>
        <Text>realm-js</Text>
        <Text>unsplash-js</Text>
      </View>
    )
}


About.propTypes = {

}

export default About;