import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
         
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute'
    },
    avatar: {
        position: 'relative',
        bottom: Dimensions.get('window').height,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
})