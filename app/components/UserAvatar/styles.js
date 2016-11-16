import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    avatarStyle: {
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'flex-start'
    },
    avatarContainer: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
    },
    avatar: {
        flex: .5,
        borderRadius: 50,
        height: 50,
        width: 50,
        backgroundColor: 'transparent',
    }
});