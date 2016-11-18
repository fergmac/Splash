import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    user: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 30,
        marginBottom: 10,
    },
    text: {
        marginTop: 10,
        marginBottom: 10,
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
        width: Dimensions.get('window').width/3,
        height: Dimensions.get('window').width/3,
    }
})