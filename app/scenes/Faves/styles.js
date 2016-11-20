import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoGallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    photo: {
        alignItems: 'flex-start',
        borderColor: 'white',
        borderWidth: 1,
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
    }
})