import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    photo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    }
})