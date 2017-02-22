import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    project: {
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
    },
    versionContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    version: {
        fontSize: 18,
    },
    rows: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
    },
    tools: {
        fontWeight: 'bold',
        color: 'grey',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14,
    },
    photo: {
        width: Dimensions.get('window').width,
        marginBottom: 30,
    },
    credit: {
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
    },
    strong: {
        fontWeight: 'bold',
    },
})