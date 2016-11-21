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
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatarName: {
        color: 'white',
        marginTop: 15,
        marginLeft: 5
    },
    image: {
        flex: 2,
        height: 200,
        width: Dimensions.get('window').width,
    },
    likes: {
        flex: 1,
        justifyContent: 'center'
    },
    downloads: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        justifyContent: 'space-around',
    },
    likeNumbers: {
        color: 'white',
        justifyContent: 'center',
        fontSize: 30
    },
    downloadNumbers: {
        color: 'white',
        justifyContent: 'center',
        marginLeft: 15,
        fontSize: 30
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
        marginBottom: 10,
        marginLeft: 100
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