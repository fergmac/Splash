import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute'
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    avatar: {
        position: 'relative',
        top: 460,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
})