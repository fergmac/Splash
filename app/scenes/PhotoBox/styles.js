import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    header: {
        marginTop: 30,
        marginBottom: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        flex: 2,
        height: 200,
        width: Dimensions.get('window').width,
    },
    text: {
        color: 'white',
        paddingTop: 15,
        paddingLeft: 10,
    },
    buttons: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    exitButton: {
        justifyContent: 'flex-end',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    avatarContainer: {
        flexDirection: 'row',
    }
})