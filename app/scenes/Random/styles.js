import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    avatar: {
        position: 'absolute',
        top: 460,
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
})