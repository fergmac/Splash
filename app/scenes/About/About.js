import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { styles } from './styles';


const About = () => {
    return (
      <View style={styles.container}>
        <View style={styles.project}>
          <Image
            // res
            style={styles.photo}
            source={require('../../images/red-logo.png')}
          />
          <View style={styles.versionContainer}>
            <Text style={styles.version}>Splashify Mobile App</Text>
            <Text style={styles.version}>Application Version: <Text style={styles.strong}>1.0</Text></Text>
          </View>
          <Text style={styles.rows}>2016 RED Academy. All rights reserved.</Text>
        </View>
        <View style={styles.credit}>
          <Text style={styles.rows}><Text style={styles.strong}>Credits:</Text></Text>
          <Text style={styles.rows}>Splashify was built using the Unsplash API, with help from the following:</Text>
          <Text style={styles.tools}>ex-navigation</Text>
          <Text style={styles.tools}>react-native</Text>
          <Text style={styles.tools}>react-native-timeago</Text>
          <Text style={styles.tools}>react-native-vector-icons</Text>
          <Text style={styles.tools}>realm-js</Text>
          <Text style={styles.tools}>unsplash-js</Text>
        </View>
      </View>
    )
}


About.propTypes = {

}

export default About;