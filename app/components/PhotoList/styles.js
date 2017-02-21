/* eslint-disable */
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
        marginTop: 5,
    },
    image: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
    },
    createdAt: {
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    location: {
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        color: 'grey',
        paddingLeft: 20,
        paddingBottom: 20,
    }
})