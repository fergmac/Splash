import React, { PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PhotoList from '../../components/PhotoList';
import styles from './styles';



const Recent = (props) => {
    console.log(props.recentPhotos)
    return (
        <PhotoList recentPhotos={props.recentPhotos} goToUser={props.goToUser} />
    )
}


Recent.propTypes = {
    recentPhotos: PropTypes.object.isRequired,
}

export default Recent;