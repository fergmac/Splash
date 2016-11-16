import React, { PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PhotoList from '../../components/PhotoList';


const Recent = (props) => {
    return (
        <PhotoList recentPhotos={props.recentPhotos} />
    )
}

const styles = StyleSheet.create({

});

Recent.propTypes = {
    recentPhotos: PropTypes.object.isRequired,
}

export default Recent;